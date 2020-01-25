<template>
     <div class="container">
          <div class="card">
               <div class="card-header">
                    <h1 class="h4">Create video</h1>
               </div>
               <div class="card-body">
                    <h2 class="border-bottom card-title h3">Create new video</h2>
                    <form>
                         <div class="form-group">
                              <label for="title">Title</label>
                              <input type="text" class="form-control"
                                     v-model.trim="title" id="title">
                         </div>
                         <div class="form-check">
                              <input class="form-check-input" type="checkbox" v-model="allowDownload"
                                     id="allow-download">
                              <label class="form-check-label" for="allow-download">
                                   Allow download for students
                              </label>
                         </div>
                         <div class="form-group">
                              <label for="description">Description</label>
                              <textarea class="form-control" id="description" v-model.trim="description"
                                        rows="3"></textarea>
                         </div>
                         <div class="form-group upload-container">
                              <input type="file" class="form-control-file custom-file"
                                     @change="processFile" accept="video/*">
                              <span class="icon mr-4"><a href="#" @click.prevent="openUrlModal('file')"><img
                                        src="../assets/upload.png"></a></span>
                              <span class="icon mr-4"><a href="#" @click.prevent="openUrlModal('youtube')"><img
                                        src="../assets/youtube.png"></a></span>
                              <span class="icon mr-4"><a href="#" @click.prevent="openUrlModal('vimeo')"><img
                                        src="../assets/vimeo.png"></a></span>
                              <span class="upload-name">{{videoFile ? videoFile.name : videoLink}}</span>
                         </div>
                         <div class="form-group">
                              <label>Publish date</label>
                              <datepicker
                                        :format="customFormatter"
                                        input-class="w-100"
                                        v-model="publishDate"
                              ></datepicker>
                         </div>
                         <div class="form-group">
                              <label>Preparations</label>
                              <multiselect v-model="preparation" :options="preparations"
                                           label="item"
                                           :searchable="false"
                                           :show-labels="false" placeholder="Pick a value">

                              </multiselect>
                         </div>
                         <div class="form-group">
                              <label>Tags</label>
                              <vue-tags-input
                                        v-model="tag"
                                        :tags="tags"
                                        @tags-changed="newTags => tags = newTags"
                              />
                         </div>
                         <section class="mb-5">
                              <h1 class="h4">Sharing contents</h1>
                              <div class="form-check">
                                   <input class="form-check-input" type="checkbox" v-model="publishTimeline"
                                          id="timeline-publish">
                                   <label class="form-check-label" for="timeline-publish">
                                        Publish it on my timeline
                                   </label>
                              </div>
                              <div class="form-group">
                                   <label>Publish it in</label>
                                   <multiselect v-model="sharingWith" :options="publishingPlaces"
                                                :searchable="false"
                                                :show-labels="false" placeholder="Pick a value">

                                   </multiselect>
                              </div>
                              <div class="form-group">
                                   <label>Publish in special libraries</label>
                                   <multiselect v-model="libraries" :options="specialLibraries"
                                                :searchable="false" label="item"
                                                :multiple="true" :close-on-select="false"
                                                :show-labels="false" placeholder="Pick a value">

                                   </multiselect>
                              </div>
                              <h2 class="h5 mb-0">Share contents with students</h2>
                              <p class="text-danger">* You must choose at least one section</p>
                              <div class="form-check">
                                   <input class="form-check-input" type="checkbox" v-model="checkAll" id="check-all">
                                   <label class="form-check-label" for="check-all">
                                        Check all
                                   </label>
                              </div>
                              <div class="form-check" v-for="(student, index) in students" :key="index">
                                   <input class="form-check-input" type="checkbox"
                                          v-model="shareWithStudent[student.id]" :id='`list-${index}`'>
                                   <label class="form-check-label" :for='`list-${index}`'>
                                        {{student.name}}
                                   </label>
                              </div>

                         </section>
                         <button type="submit" class="btn btn-primary" @click.prevent="addVideo">Add</button>

                    </form>

               </div>
          </div>
          <youtube-link-modal></youtube-link-modal>
          <vimeo-link-modal></vimeo-link-modal>
     </div>
</template>

<script>
   import Datepicker from 'vuejs-datepicker';
   import Multiselect from 'vue-multiselect';
   import VueTagsInput from '@johmun/vue-tags-input';
   import {mapState} from 'vuex';
   import YoutubeLinkModal from "./modals/youtube-link-modal";
   import VimeoLinkModal from "./modals/Vimeo-link-modal";

   export default {
      name: "create-video",
      components: {
         VimeoLinkModal,
         YoutubeLinkModal,
         Datepicker,
         Multiselect,
         VueTagsInput
      },
      data() {
         return {
            preparation: '',
            file: null,
            tag: '',
            publishingPlaces: ["Public library", "Schools", "Nothing"],
            libraries: '',
            shareWithStudent: {},
            tags: [],
            checkAll: false

         }
      },
      computed: {
         ...mapState({
            preparations: state => state.preparations,
            specialLibraries: state => state.specialLibraries,
            students: state => state.students
         }),
         title: {
            get() {
               return this.$store.state.video.title;
            },
            set(title) {
               this.$store.commit("updateVideo", {prop: "title", value: title});
            }
         },
         description: {
            get() {
               return this.$store.state.video.description;
            },
            set(des) {
               this.$store.commit("updateVideo", {prop: "description", value: des});
            }
         },
         allowDownload: {
            get() {
               return this.$store.state.video.can_students_download;
            },
            set(value) {
               this.$store.commit("updateVideo", {prop: "can_students_download", value});
            }
         },
         videoFile: {
            get() {
               return this.$store.state.video.video_file
            },
            set(file) {
               this.$store.commit("updateVideo", {prop: "video_file", value: file});
            }
         },
         videoType: {
            get() {
               return this.$store.state.video.video_type;
            },
            set(type) {
               this.$store.commit("updateVideo", {prop: "video_type", value: type});
            }
         },
         videoLink: {
            get() {
               return this.$store.state.video.video_url
            },
            set(url) {
               this.$store.commit("updateVideo", {prop: "video_url", value: url});
            }
         },
         publishDate: {
            get() {
               return this.$store.state.video.publish_date;
            },
            set(date) {
               window.moment(date).format('MM-DD-YYYY, hh:mm:ss');
               this.$store.commit("updateVideo", {prop: "publish_date", value: date});
            }
         },
         publishTimeline: {
            get() {
               return this.$store.state.video.publish_timeline;
            },
            set(value) {
               this.$store.commit("updateVideo", {prop: "publish_timeline", value});
            }
         },
         sharingWith: {
            get() {
               return this.$store.state.video.sharing_with;
            },
            set(publishIn) {
               this.$store.commit("updateVideo", {prop: "sharing_with", value: publishIn});
            }
         },
         studentsIds: {
            get() {
               return this.$store.state.video.students;
            },
            set(students) {
               this.$store.commit("updateVideo", {prop: "students", value: students});
            }
         }
      },
      methods: {
         processFile(e) {
            this.videoFile = e.target.files[0];
            this.file = this.videoFile;
            this.videoType = "file";
         },
         openUrlModal(videoType) {
            this.videoType = videoType;
            if (videoType === "youtube") {
               this.$modal.show("youtube-link");
               return;
            }
            if (videoType === "vimeo") {
               this.$modal.show("vimeo-link");
               return;
            }
            const input = document.querySelector("input[type=file]");
            input.click();

         },
         customFormatter(date) {
            return window.moment(date).format('MMMM Do YYYY, h:mm:ss a');
         },
         addVideo() {
            this.$store.dispatch("createVideo").then(() => {
               this.$fire({
                  title: "Video Created Successfully",
                  type: "success",
                  timer: 3000
               }).then(() => {
                  window.location.href = "/";
               });

            })
         }
      },
      watch: {
         videoType(type) {
            if (type === "file") {
               this.videoLink = null;
               this.videoFile = this.file;
            } else {
               this.videoFile = null;
            }
         },
         preparation: {
            handler(preparation) {
               this.$store.commit("updateVideo", {prop: "preparation_id", value: preparation.id});
            },
            deep: true
         },
         libraries(libraries) {
            let librariesIds = [];
            for (let library of libraries) {
               librariesIds.push(library.id);
            }
            this.$store.commit("updateVideo", {prop: "publish_custom_library", value: librariesIds});
         },
         shareWithStudent: {
            handler(students) {
               console.log("watching")
               let studentsIds = [];
               for (let studentId in students) {
                  if (students[studentId]) {
                     studentsIds.push(studentId);
                  }
               }
               this.studentsIds = studentsIds;
            },
            deep: true
         },
         tags(tags) {
            let tagsString = tags.map((tag) => tag.text);
            this.$store.commit("updateVideo", {prop: "tags", value: tagsString});
         },
         checkAll(checked) {
            console.log("checkAll", checked)
            let studentsIds = [];
            for (let student of this.students) {
               this.shareWithStudent[student.id] = checked;
               if(checked) studentsIds.push(student.id);
            }
            this.studentsIds = studentsIds;

         }
      }
   }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="css">

     .upload-container {
          position: relative;
     }

     .custom-file {
          opacity: 0;
          top: 0;
          position: absolute;
          left: 0;
          width: 60px;
          height: 100%;
          z-index: -1;
          cursor: pointer;
     }

     .icon i {
          font-size: 60px;
     }

     .w-100 {
          width: 100%;
     }
</style>