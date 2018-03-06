// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import jquery from 'jquery'
import * as signalR from '@aspnet/signalr-client'

Vue.config.productionTip = false

window.$ = jquery
window.jQuery = jquery

Vue.prototype.$http = axios
Vue.prototype.$signalR = signalR

sync(store, router)

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:7000', // Your API domain
  providers: {
    google: {
      clientId: '',
      redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
  }
})

const connection = new signalR.HubConnection('http://localhost:7000/events')
connection.on('eventhappened', data => {
  store.dispatch('eventHappened', { entityId: data })
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
