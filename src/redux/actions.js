// actions

export const ADD_QUESTION_TO_BANK = 'ADD_QUESTION_TO_BANK'

// action creators

export const addQuestionToBank = question => ({
  type: ADD_QUESTION_TO_BANK,
  payload: question
})
