import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class QuizQuestion extends Component {
  render() {
    const radioName = `answer-${this.props.index}`

    return (
      <div style={containerStyle}>
        <h4>{this.props.question.question}</h4>
        <input type='radio' name={radioName} value='true' /><label style={labelStyle}>True</label>
        <input type='radio' name={radioName} value='false' /><label style={labelStyle}>False</label>
      </div>
    )
  }
}

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

// inline styles

const containerStyle = {
  width: '50%',
  border: '1px #ccc solid',
  borderRadius: '4px',
  margin: '20px',
  paddingBottom: '15px',
}

const labelStyle = {
  marginLeft: '5px',
  marginRight: '15px'
}