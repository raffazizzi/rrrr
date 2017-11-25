import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'

export default class HomePage extends Component {
  render() {
    let data = 'Click button to load example data.'
    if (this.props.asyncData) {
      data = this.props.asyncData
    }
    return (
      <div className="romajs-homebox mdc-card mdc-elevation--z10">
        <section className="mdc-card__primary">
          <pre>{data}</pre>
        </section>
        <section className="mdc-card__actions">
          <button className="mdc-button mdc-button--compact mdc-card__action" onClick={() => {this.props.getAsyncData('./fakeData/tei.xml')}}>
            Get example file data
          </button>
          <button className="mdc-button mdc-button--compact mdc-card__action" onClick={() => {window.location = 'anotherpage'}}>
            Go to another page
          </button>
        </section>
      </div>
    )
  }
}

HomePage.propTypes = {
  getAsyncData: PropTypes.func,
  asyncData: PropTypes.string
}
