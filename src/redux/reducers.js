import { ADD_QUESTION_TO_BANK } from './actions'
import { combineReducers } from 'redux'

const questionBankReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_BANK:
      return [...state, action.payload]

    default:
      return state
  }
}

export default combineReducers({
  questionBank: questionBankReducer
})