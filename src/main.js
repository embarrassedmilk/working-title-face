// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import Vuetify from 'vuetify'
import jquery from 'jquery'
import * as client from './api/client'
import {
  sync
} from 'vuex-router-sync'

import 'vuetify/dist/vuetify.min.css'

import * as signalR from '@aspnet/signalr-client'

Vue.config.productionTip = false

window.$ = jquery
window.jQuery = jquery

Vue.prototype.$http = axios
Vue.prototype.$signalR = signalR

sync(store, router)

Vue.use(Vuetify)

const connection = new signalR.HubConnection('http://localhost:7000/events')
connection.on('eventhappened', data => {
  store.dispatch('eventHappened', { entityId: data })
})
connection.start()

client.get(
  '/api/account/getuser',
  (data) => store.dispatch('userFound', { user: data }),
  (e) => console.log(e)
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
