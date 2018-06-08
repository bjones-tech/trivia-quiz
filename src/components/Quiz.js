import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuizQuestion from './QuizQuestion'

const Quiz = props => {
  const isSubmitDisabled = props.quiz.some(question => question.selectedAnswer === null) ? true : false

  return (
    <div style={containerStyle}>
      {props.quiz.map((question, index) => <QuizQuestion question={question} index={index} />)}
      <button style={buttonStyle} disabled={isSubmitDisabled}>Submit</button>
    </div>
  )
}

const mapStateToProps = state => ({
  quiz: state.quiz
})

export default connect(mapStateToProps)(Quiz)

// inline styles

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const buttonStyle = {
  fontSize: '1.1em',
  padding: '8px',
  marginTop: '20px'
}