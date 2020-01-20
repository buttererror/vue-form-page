import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import store from './vuex';

Vue.config.productionTip = false

new Vue({
   store,
  render: h => h(App),
}).$mount('#app')
