import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewQuiz } from '../redux/actions'

class Quiz extends Component {
  constructor(props) {
    super(props)

    if (props.quiz.length !== 2) {
      props.createNewQuiz(this.props.questionBank)
    }
  }

  render() {
    return (
      <div>
        {this.props.quiz.map(quizQuestion => {
          return <h4>{quizQuestion.question}</h4>
        })}
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