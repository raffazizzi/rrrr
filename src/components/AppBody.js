import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import AnotherPage from '../components/AnotherPage'

class AppBody extends Component {
  render() {
    return (<div className="mdc-typography">
      <div>
        <main>
          <Route exact path="/" component={() => {
            return (<HomePage
              getAsyncData={this.props.getAsyncData}
              asyncData={this.props.asyncData} />)
          }} />
          <Route exact path="/anotherpage" component={AnotherPage} />
        </main>
      </div>
    </div>)
  }
}

AppBody.propTypes = {
  getAsyncData: PropTypes.func.isRequired,
  asyncData: PropTypes.string
}

export default AppBody
