import { EXAMPLE_ACTION, REQUEST_ASYNC, RECEIVE_ASYNC } from '../actions'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function example(state = '', action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return action.text
    default:
      return state
  }
}

function asyncData(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_ASYNC:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ASYNC:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function exampleAsync(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ASYNC:
    case REQUEST_ASYNC:
      return Object.assign({}, state,
        asyncData(state.exampleAsync, action)
      )
    default:
      return state
  }
}

const exampleApp = combineReducers({
  example,
  exampleAsync,
  router: routerReducer
})

export default exampleApp
