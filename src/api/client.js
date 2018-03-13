import axios from 'axios'

let _base = 'http://localhost:7000'

export function get (resource, onSuccess, onError) {
  axios.get(`${_base}${resource}`, { withCredentials: true }).then(response => {
    onSuccess(response.data)
  }).catch(e => {
    onError(e)
  })
}
