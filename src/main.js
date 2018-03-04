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

const signalR = require('@aspnet/signalR')

Vue.prototype.$http = axios
Vue.prototype.$signalR = signalR

sync(store, router)

const connection = new signalR.HubConnection('http://localhost:7000/events')
connection.on('eventhappened', data => {
  // store.dispatch('SOMETHING_HAPPENED', data)
  console.log(data)
})
connection.start()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
