import './scss/style.scss'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import exampleApp from './reducers'
import App from './containers/App'

const history = createHistory()

const store = createStore(
  exampleApp,
  applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('rrrr')
)
