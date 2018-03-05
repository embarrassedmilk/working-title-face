import * as types from './mutation-types'

export const eventHappened = ({ commit }, event) => {
  commit(types.SOMETHING_HAPPENED, {
    event
  })
}
