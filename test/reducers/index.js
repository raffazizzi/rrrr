import expect from 'expect'
import exampleApp from '../../src/reducers'

const initialState = { example: '', exampleAsync: {}, router: { 'location': null } }

describe('Test reducers', () => {
  it('should handle initial state', () => {
    expect(
      exampleApp(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle EXAMPLE_ACTION', () => {
    const nextState = exampleApp({}, {
      type: 'EXAMPLE_ACTION',
      text: 'test'
    })
    expect(nextState.example).toEqual('test')
  })

  it('should handle REQUEST_ASYNC', () => {
    const state = Object.assign({}, initialState)
    const nextState = exampleApp(state, {
      type: 'REQUEST_ASYNC',
      url: './fakeData/tei.xml'
    })
    expect(nextState.exampleAsync).toEqual({ isFetching: true })
  })

  it('should handle RECEIVE_ASYNC', () => {
    const text = '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    const newState = Object.assign({}, initialState,
      { exampleAsync: { isFetching: true } }
    )
    const state = exampleApp(newState, {
      type: 'RECEIVE_ASYNC',
      data: text
    })

    expect(state.exampleAsync.data).toEqual(text)
  })
})
