import * as types from './mutation-types'

export default {
  [types.SOMETHING_HAPPENED] (state, { event }) {
    addEvent(state, event)
  },
  [types.USER_FOUND] (state, { user }) {
    state.user = user.user === '' ? undefined : user
  }
}

function addEvent (state, event) {
  state.events = state.events.concat([event])
}
