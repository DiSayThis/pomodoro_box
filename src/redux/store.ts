import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './themeReducer/reducer';

const rootReducer = combineReducers({
  theme: themeReducer
});

export const store = configureStore({
  reducer: rootReducer
});
