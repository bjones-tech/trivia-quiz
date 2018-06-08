import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAnswer } from '../redux/actions'

class QuizQuestion extends Component {
  handleChange = event => {
    this.props.updateAnswer({
      ...this.props.question,
      selectedAnswer: Boolean(+event.target.value)
    })
  }

  render() {
    const radioName = `answer-${this.props.index}`

    return (
      <div style={containerStyle}>
        <h4>{this.props.question.question}</h4>
        <input type='radio' name={radioName} value='1' onChange={this.handleChange} /><label style={labelStyle}>True</label>
        <input type='radio' name={radioName} value='0' onChange={this.handleChange} /><label style={labelStyle}>False</label>
      </div>
    )
  }
}

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

const mapDispatchToProps = {
  updateAnswer: updateAnswer
}

export default connect(null, mapDispatchToProps)(QuizQuestion)

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