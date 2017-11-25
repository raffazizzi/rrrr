import fetch from 'isomorphic-fetch'

export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
export const REQUEST_ASYNC = 'REQUEST_ASYNC'
export const RECEIVE_ASYNC = 'RECEIVE_ASYNC'

export function exampleAction(text) {
  return {
    type: EXAMPLE_ACTION,
    text
  }
}

function requestAsync(url) {
  return {
    type: REQUEST_ASYNC,
    url
  }
}

function receiveAsync(data) {
  return {
    type: RECEIVE_ASYNC,
    data,
    receivedAt: Date.now()
  }
}

/** ********
 * thunks *
 ******** **/

export function exampleAsyncAction(url) {
  return dispatch => {
    dispatch(requestAsync(url))
    return fetch(url)
      .then(response => response.text())
      .then(data => dispatch(receiveAsync(data)))
  }
}
