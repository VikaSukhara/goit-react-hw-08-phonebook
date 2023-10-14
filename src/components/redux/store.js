import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contactsStore: contactReducer,
  filterStore: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
