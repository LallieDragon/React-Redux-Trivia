import opentdb from '../apis/opentdb';

export const fetchCategories = () => async dispatch => {
  const response = await opentdb.get('/api_category.php')

  dispatch({ type: 'FETCH_CATEGORIES', payload: response.data})
}
