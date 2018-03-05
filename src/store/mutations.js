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
  state.events = state.events.concat([event])
}
