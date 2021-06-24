import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '300595d929d6a6ebde3ac2741883f41c';

// release_date;
export const fetchNewMovies = createAsyncThunk(
  'movies/fetchNewMovies',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
      // console.log('gg', data);
      return data.results;
    } catch (error) {}
  },
);
