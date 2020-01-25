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
                           id="vimeo-link" placeholder="Put a Vimeo link" v-model.trim="videoLink">
               </form>
               <div class="row mt-4 justify-content-end">
                    <div class="col-4 text-right">
                         <button class="btn btn-primary" @click="hideModal">Done</button>
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
         }

      },
      methods: {
         hideModal() {
            this.$modal.hide("vimeo-link");
         }
      }

   }
</script>

<style scoped>

</style>