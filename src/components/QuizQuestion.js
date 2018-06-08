import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class QuizQuestion extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.question.question}</h4>
      </div>
    )
  }
}

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired
}