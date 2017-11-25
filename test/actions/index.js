import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import express from 'express'
import * as actions from '../../src/actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const startTestServer = () => {
  const app = new (express)()
  const port = 3000
  app.use('/fakeData', express.static('test/fakeData'))

  return app.listen(port, (error) => {
    if (error) {
      throw new Error(error)
    }
  })
}

describe('Test actions', () => {
  it('exampleAction should set some text', () =>{
    expect(actions.exampleAction('test')).toEqual({
      type: 'EXAMPLE_ACTION',
      text: 'test'
    })
  })

  it('exampleAsyncAction should retrieve a local text file', (done) =>{
    const store = mockStore({ example: '', exampleAsync: {} })
    const srv = startTestServer()

    store.subscribe(() => {
      const receiveAct = store.getActions().find((act)=>{
        return act.type === 'RECEIVE_ASYNC'
      })
      if (receiveAct) {
        srv.close()
        expect(receiveAct.data.substring(0, 19)).toEqual('<?xml version="1.0"')
        done()
      }
    })
    store.dispatch(actions.exampleAsyncAction('http://localhost:3000/fakeData/tei.xml'))
  })
})
