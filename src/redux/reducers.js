import { ADD_QUESTION_TO_BANK, CREATE_NEW_QUIZ, UPDATE_ANSWER, updateAnswer } from './actions'
import { combineReducers } from 'redux'

const questionBankReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_BANK:
      return [...state, action.payload]
    default:
      return state
  }
}

const updateQuizQuestion = (state, action) => {
  return state.map(quizQuestion => {
    if (quizQuestion.question !== action.payload.question) {
      return quizQuestion
    }
    return action.payload
  })
}

const quizReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_QUIZ:
      return action.payload
    case UPDATE_ANSWER:
      return updateQuizQuestion(state, action)
    default:
      return state
  }
}

export default combineReducers({
  questionBank: questionBankReducer,
  quiz: quizReducer
})