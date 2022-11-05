import { configureStore } from '@reduxjs/toolkit';
import { fetchJobsReducer } from './jobSlice.jsx';

export const store = configureStore({
  reducer: fetchJobsReducer,
});
