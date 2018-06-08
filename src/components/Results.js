import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewQuiz } from '../redux/actions'
import PropTypes from 'prop-types'

class Results extends Component {
  constructor(props) {
    super(props)

    const correct = props.quiz.filter(question => question.answer === question.selectedAnswer)
    const percentage = (correct.length / props.quiz.length) * 100

    this.state = {
      questions: props.quiz.length,
      correctAnswers: correct.length,
      percentage: percentage,
      greeting: percentage === 100 ? 'Great Job!' : '',
      buttonText: percentage === 100 ? 'New Questions' : 'Try Again'
    }
  }

  clickHandler = () => {
    if (this.state.percentage === 100) {
      this.props.createNewQuiz(this.props.questionBank)
    }

    this.props.hideResultsHandler()
  }

  render() {
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <h1>{this.state.percentage}%</h1>
        <p>You've answered {this.state.correctAnswers} out of {this.state.questions} questions correctly</p>
        <button style={buttonStyle} onClick={this.clickHandler}>{this.state.buttonText}</button>
      </div>
    )
  }
}

Results.propTypes = {
  hideResultsHandler: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  questionBank: state.questionBank,
  quiz: state.quiz
})

const mapDispatchToProps = {
  createNewQuiz: createNewQuiz
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)

// inline styles

const buttonStyle = {
  fontSize: '1.1em',
  padding: '8px',
  marginTop: '20px'
}