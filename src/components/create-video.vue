<template>
     <div class="container">
          <div class="card">
               <div class="text-left card-header">
                    Create video
               </div>
               <div class="card-body">
                    <h5 class="border-bottom text-left card-title">Create new video</h5>
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
                              <span class="backup"><i class="material-icons">backup</i></span>
                         </div>

                    </form>

               </div>
          </div>
     </div>
</template>

<script>
   export default {
      name: "create-video"
   }
</script>

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

     .backup i{
          font-size: 60px;
     }
</style>