<template>
  <div id="app">
       <create-video></create-video>
  </div>
</template>

<script>

import CreateVideo from "./components/create-video";
export default {
  name: 'app',
  components: {
     CreateVideo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
