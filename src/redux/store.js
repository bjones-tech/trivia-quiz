import { createStore } from 'redux'
import mainReducer from './reducers'
import { addQuestionToBank, createNewQuiz } from './actions'

export const store = createStore(mainReducer)

// seed questions into store

store.dispatch(addQuestionToBank({
  question: 'The Washington Capitals won the Stanley Cup in 2018',
  answer: true
}))

store.dispatch(addQuestionToBank({
  question: 'The Cleveland Cavaliers won the NBA Finals in 2018',
  answer: false
}))

store.dispatch(addQuestionToBank({
  question: 'Mike Trout currently plays for the New York Yankees',
  answer: false
}))

store.dispatch(addQuestionToBank({
  question: 'Justify is the 13th horse to win the Triple Crown',
  answer: true
}))

store.dispatch(addQuestionToBank({
  question: 'Steve Carell played Michael Scott in The Office',
  answer: true
}))

store.dispatch(addQuestionToBank({
  question: 'Ray Romano guest starred in Parks and Recreation',
  answer: false
}))

store.dispatch(addQuestionToBank({
  question: 'Law and Order: SVU primarily takes place in Chicago',
  answer: false
}))

store.dispatch(addQuestionToBank({
  question: 'Tina Fey is a former cast member of Saturday Night Live',
  answer: true
}))

store.dispatch(addQuestionToBank({
  question: 'Elton John released a song called "Piano Man" in 1973',
  answer: false
}))

store.dispatch(addQuestionToBank({
  question: 'Pearl Jam was inducted into the Rock & Roll Hall of Fame in 2017',
  answer: true
}))

store.dispatch(addQuestionToBank({
  question: 'Kelly Clarkson won the first season of The Voice',
  answer: false
}))

store.dispatch(addQuestionToBank({
  question: 'The Stratocaster is a guitar made by Fender',
  answer: true
}))

// create initial quiz

store.dispatch(createNewQuiz(store.getState().questionBank))