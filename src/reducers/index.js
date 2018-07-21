
/*
* This module contains a function which combines all the
* reducers to create and return a single application state.
*/

import { combineReducers } from 'redux';
import booksReducer from './reducer-books';
import activeBookReducer from './reducer-active-book';

const rootReducer = combineReducers({
  books : booksReducer,
  activeBook: activeBookReducer
});

export default rootReducer;
