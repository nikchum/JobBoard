import { fetchJobsReducer } from './jobSlice.jsx';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: fetchJobsReducer,
});
