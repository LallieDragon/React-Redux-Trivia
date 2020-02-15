import opentdb from '../apis/opentdb';

export const fetchCategories = () => async dispatch => {
  const response = await opentdb.get('/api_category.php')

  dispatch({ type: 'FETCH_CATEGORIES', payload: response.data})
}

export const receiveQuestions = (id, name) => ({
  type: 'RECEIVE_QUESTIONS',
  id: id,
  name: name
})

export const fetchQuestions = (id) => async dispatch => {
  const response = await opentdb.get(`/api.php?amount=4&category=${id}`);

  dispatch({ type: 'FETCH_QUESTIONS', payload: response.data.results })
}

export const storeSelectedQuestion = (question, allAnswers) => ({
  type: "STORE_QUESTION",
  question: question,
  allAnswers: allAnswers
})
