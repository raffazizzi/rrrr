import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AnotherPage extends Component {
  render() {
    return (
      <div className="romajs-homebox mdc-card mdc-elevation--z10">
        <section className="mdc-card__primary">
          Just another page. <Link to="/">Go back</Link>
        </section>
        <section className="mdc-card__actions">
          <button className="mdc-button mdc-button--compact mdc-card__action" onClick={() => {window.location = '/'}}>
            Back
          </button>
        </section>
      </div>
    )
  }
}
