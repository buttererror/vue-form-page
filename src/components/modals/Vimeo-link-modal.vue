<template>
     <modal name="vimeo-link"
            classes="modal-container"
            height="auto"

     >
          <div class="container">
               <header class="text-center">
                    <h1>Vimeo link</h1>
               </header>
               <form>
                    <input type="text" class="form-control" @keyup.enter="hideModal"
                           id="vimeo-link" placeholder="Put a Vimeo link"
                           @change="setVideoType"
                    >
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
      name: "Vimeo-link-modal",
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
            this.$modal.hide("vimeo-link");
         },
         setVideoType(e) {
            if(e.target.value) {
               window.bus.$emit("validateLinkType");
               this.videoLink = e.target.value;
               this.videoType = "vimeo";
            }
         }
      }

   }
</script>

<style scoped>

</style>