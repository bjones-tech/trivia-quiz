import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class Results extends Component {
  render() {
    return (
      <div>
        <h2>Results!</h2>
        <button style={buttonStyle} onClick={this.props.hideResultsHandler}>Back to quiz</button>
      </div>
    )
  }
}

// inline styles

const buttonStyle = {
  fontSize: '1.1em',
  padding: '8px',
  marginTop: '20px'
}