import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import store from './vuex';
window.moment = require('moment');

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

window.bus = new Vue();

import VModal from 'vue-js-modal'

Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
   store,
  render: h => h(App),
}).$mount('#app');
