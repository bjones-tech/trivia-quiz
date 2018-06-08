import { getUniqueKeys } from '../helpers/rand'

// actions

export const ADD_QUESTION_TO_BANK = 'ADD_QUESTION_TO_BANK'
export const CREATE_NEW_QUIZ = 'CREATE_NEW_QUIZ'

// action creators

export const addQuestionToBank = question => ({
  type: ADD_QUESTION_TO_BANK,
  payload: question
})

export const createNewQuiz = questionBank => {
  const questionKeys = getUniqueKeys(questionBank.length, 2)

  const quiz = questionKeys.map(val => questionBank[val])

  return {
    type: CREATE_NEW_QUIZ,
    payload: quiz
  }
}
