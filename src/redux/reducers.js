import { ADD_QUESTION_TO_BANK, CREATE_NEW_QUIZ } from './actions'
import { combineReducers } from 'redux'

const questionBankReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_BANK:
      return [...state, action.payload]

    default:
      return state
  }
}

const quizReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_QUIZ:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  questionBank: questionBankReducer,
  quiz: quizReducer
})