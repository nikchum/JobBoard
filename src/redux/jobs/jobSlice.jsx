import { createSlice } from '@reduxjs/toolkit';
import { fetchAllJobs } from './jobOperations';

const initialState = {
  listJobs: null,
  isLoading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: {
    [fetchAllJobs.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllJobs.fulfilled](state, { payload }) {
      state.listJobs = payload;
      state.isLoading = false;
    },
    [fetchAllJobs.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const fetchJobsReducer = jobsSlice.reducer;
