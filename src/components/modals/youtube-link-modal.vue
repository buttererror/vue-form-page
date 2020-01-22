<template>
     <modal name="youtube-link"
            class="modal-container"

     >
          <header class="text-center">
               <h1>YouTube link</h1>
          </header>
          <form>
               <input type="text" class="form-control" id="youtube-link" placeholder="Put a youTube link">
          </form>
     </modal>
</template>

<script>
   export default {
      name: "youtube-link-modal"
   }
</script>

<style>
     .modal-container {
          padding: 20px;
     }

</style>