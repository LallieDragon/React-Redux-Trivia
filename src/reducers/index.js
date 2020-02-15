import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import categoriesSelectedReducer from './categoriesSelectedReducer';
import questionsReducer from './questionsReducer';
import storeSelectedQuestionReducer from './storeSelectedQuestionReducer';

export default combineReducers({
  categories: categoriesReducer,
  categoriesSelected: categoriesSelectedReducer,
  questionsByCategory: questionsReducer,
  selectedQuestion: storeSelectedQuestionReducer
});
