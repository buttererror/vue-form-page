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
                              <input type="text" class="form-control" id="title">
                         </div>
                         <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="allow-download">
                              <label class="form-check-label" for="allow-download">
                                   Allow download for students
                              </label>
                         </div>
                         <div class="form-group">
                              <label for="description">Description</label>
                              <textarea class="form-control" id="description" rows="3"></textarea>
                         </div>
                         <div class="form-group upload-container">
                              <input type="file" class="form-control-file custom-file">
                              <span class="icon mr-4"><img src="../assets/upload.png"></span>
                              <span class="icon mr-4"><img src="../assets/youtube.png"></span>
                              <span class="icon mr-4"><img src="../assets/vimeo.png"></span>
                              <span class="upload-name">upload name</span>
                         </div>
                         <div class="form-group">
                              <label>Publish date</label>
                              <datepicker
                                        input-class="w-100"
                              ></datepicker>
                         </div>
                         <div class="form-group">
                              <label>Preparations</label>
                              <multiselect v-model="value" :options="options"
                                           :searchable="false" :close-on-select="false"
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
                                   <input class="form-check-input" type="checkbox" value="" id="timeline-publish">
                                   <label class="form-check-label" for="timeline-publish">
                                        Publish it on my timeline
                                   </label>
                              </div>
                              <div class="form-group">
                                   <label>Publish it in</label>
                                   <multiselect v-model="publishingPlace" :options="publishingPlaces"
                                                :searchable="false" :close-on-select="false"
                                                :show-labels="false" placeholder="Pick a value">

                                   </multiselect>
                              </div>
                              <div class="form-group">
                                   <label>Publish in special libraries</label>
                                   <multiselect v-model="library" :options="libraries"
                                                :searchable="false" :close-on-select="false"
                                                :show-labels="false" placeholder="Pick a value">

                                   </multiselect>
                              </div>
                              <h2 class="h5 mb-0">Share contents with students</h2>
                              <p class="text-danger">* You must choose at least one section</p>
                              <div class="form-check">
                                   <input class="form-check-input" type="checkbox" value="" id="check-all">
                                   <label class="form-check-label" for="check-all">
                                        Check all
                                   </label>
                              </div>
                              <div class="form-check">
                                   <input class="form-check-input" type="checkbox" value="" id="list-1">
                                   <label class="form-check-label" for="list-1">
                                        list 1
                                   </label>
                              </div>
                              <div class="form-check">
                                   <input class="form-check-input" type="checkbox" value="" id="list-2">
                                   <label class="form-check-label" for="list-2">
                                        list 2
                                   </label>
                              </div>

                         </section>
                         <button type="submit" class="btn btn-primary">Add</button>

                    </form>

               </div>
          </div>
     </div>
</template>

<script>
   import Datepicker from 'vuejs-datepicker';
   import Multiselect from 'vue-multiselect';
   import VueTagsInput from '@johmun/vue-tags-input';


   export default {
      name: "create-video",
      components: {
         Datepicker,
         Multiselect,
         VueTagsInput
      },
      data() {
         return {
            value: '',
            options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
            tag: '',
            tags: [],
            publishingPlaces: ["Public library", "Schools", "Nothing"],
            publishingPlace: '',
            libraries: [],
            library: ''


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
          z-index: 1000;
          cursor: pointer;
     }

     .icon i{
          font-size: 60px;
     }

     .w-100 {
          width: 100%;
     }
</style>