// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import jquery from 'jquery'

Vue.config.productionTip = false

window.$ = jquery
window.jQuery = jquery

var signalR = require('signalr-client')

Vue.prototype.$http = axios
Vue.prototype.$signalR = signalR

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
