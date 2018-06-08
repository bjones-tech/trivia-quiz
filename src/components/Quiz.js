import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewQuiz } from '../redux/actions'
import QuizQuestion from './QuizQuestion'

class Quiz extends Component {
  constructor(props) {
    super(props)

    if (props.quiz.length === 0) {
      props.createNewQuiz(this.props.questionBank, 2)
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        {this.props.quiz.map((quizQuestion, index) => <QuizQuestion question={quizQuestion} index={index} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionBank: state.questionBank,
  quiz: state.quiz
})

const mapDispatchToProps = {
  createNewQuiz: createNewQuiz
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

// inline styles

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}