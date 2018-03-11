import * as types from './mutation-types'

export const eventHappened = ({ commit }, event) => {
  commit(types.SOMETHING_HAPPENED, {
    event
  })
}

export const userFound = ({ commit }, user) => {
  commit(types.USER_LOGGED_IN, {
    user
  })
}
