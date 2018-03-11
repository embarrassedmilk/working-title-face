import * as types from './mutation-types'

export default {
  [types.RECEIVE_ALL_EVENTS] (state, { events }) {
    events.forEach(evt => addEvent(state, evt)) // ramda?
  },
  [types.SOMETHING_HAPPENED] (state, { event }) {
    addEvent(state, event)
  },
  [types.USER_LOGGED_IN] (state, { user }) {
    state.user = user.user === '' ? undefined : user
  }
}

function addEvent (state, event) {
  state.events = state.events.concat([event])
}
