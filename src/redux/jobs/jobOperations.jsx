import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BEARER_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

axios.defaults.baseURL = 'https://api.json-generator.com';
axios.defaults.headers.common.Authorization = `Bearer ${BEARER_TOKEN}`;

export const fetchAllJobs = createAsyncThunk(
  'job/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/templates/ZM1r0eic3XEy/data');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
