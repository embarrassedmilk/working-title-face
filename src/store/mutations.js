import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL_EVENTS] (state, { events }) {
    events.forEach(evt => addEvent(state, evt)) // ramda?
  },
  [types.SOMETHING_HAPPENED] (state, { event }) {
    addEvent(state, event)
  }
}

function addEvent (state, event) {
  Vue.set(state.events, event.entityId, event)
}
