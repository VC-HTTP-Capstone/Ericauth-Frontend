import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';
import { firebase } from "./firebase/index.js";
import store from "./store/index.js";

Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app');
