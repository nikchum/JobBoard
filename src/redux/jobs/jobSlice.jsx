import { createSlice } from '@reduxjs/toolkit';
import { fetchAllJobs } from './jobOperations';

const initialState = {
  listJobs: null,
  isLoading: false,
  error: null,
  totalPages: null,
  currentPage: 1,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    changePage(state, { payload }) {
      state.currentPage = payload;
    },
  },
  extraReducers: {
    [fetchAllJobs.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllJobs.fulfilled](state, { payload }) {
      state.listJobs = payload;
      state.isLoading = false;
      state.totalPages = Math.round(payload.length / 10);
    },
    [fetchAllJobs.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { changePage } = jobsSlice.actions;
export const fetchJobsReducer = jobsSlice.reducer;
