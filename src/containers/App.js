import { connect } from 'react-redux'
import { exampleAsyncAction } from '../actions'
import { withRouter } from 'react-router'
import AppBody from '../components/AppBody'

const mapStateToProps = (state) => {
  if (state.exampleAsync !== {} && !state.exampleAsync.isFetching) {
    return { asyncData: state.exampleAsync.data }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAsyncData: (url) => {
      dispatch(exampleAsyncAction(url))
    }
  }
}

const App = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBody))

export default App
