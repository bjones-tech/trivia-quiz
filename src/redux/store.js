import { createStore } from 'redux'
import mainReducer from './reducers'
import { addQuestionToBank, createNewQuiz } from './actions'

export const store = createStore(mainReducer)

// seed questions into store

store.dispatch(addQuestionToBank({
  question: 'Is the sky blue?',
  answer: true
}))

store.dispatch(addQuestionToBank({
  question: 'Is the earth square?',
  answer: false
}))