import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  events: []
}

const store = new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
  // plugins: process.env.NODE_ENV !== 'production'
  //   ? [createLogger()]
  //   : []
})

export default store
