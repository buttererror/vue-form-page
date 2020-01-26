<template>
     <modal name="youtube-link"
            classes="modal-container"
            height="auto"

     >
          <div class="container">
               <header class="text-center">
                    <h1>YouTube link</h1>
               </header>
               <form>
                    <input type="text" class="form-control" @keyup.enter="hideModal"
                           id="youtube-link" placeholder="Put a youTube link"
                           @change="setVideoType">
               </form>
               <div class="row mt-4 justify-content-end">
                    <div class="col-4 text-right">
                         <button class="btn btn-primary" @click.prevent="hideModal">Done</button>
                    </div>
               </div>

          </div>
     </modal>
</template>

<script>
   export default {
      name: "youtube-link-modal",
      computed: {
         videoLink: {
            get() {
               return this.$store.state.video.video_url
            },
            set(url) {
               this.$store.commit("updateVideo", {prop: "video_url", value: url});
            }
         },
         videoType: {
            get() {
               return this.$store.state.video.video_type;
            },
            set(type) {
               this.$store.commit("updateVideo", {prop: "video_type", value: type});
            }
         }

      },
      methods: {
         hideModal() {
            this.$modal.hide("youtube-link");
         },
         setVideoType(e) {
            if(e.target.value) {
               window.bus.$emit("validateLinkType");
               this.videoLink = e.target.value;
               this.videoType = "youtube";
            }
         }
      }
   }
</script>

<style>
     .modal-container {
          padding: 20px;
          background: white;
     }

</style>