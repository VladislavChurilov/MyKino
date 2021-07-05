import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IMovie } from '../interfaces/interfaces';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '300595d929d6a6ebde3ac2741883f41c';

// release_date;
export const fetchNewMovies = createAsyncThunk(
  'movies/fetchNewMovies',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
      // console.log('state', getState());
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchMovieDetail = createAsyncThunk(
  'movies/fetchMovieDetail',
  async (movieId: string, { rejectWithValue }) => {
    // console.log(movieId);
    try {
      const { data } = await axios.get(
        `movie/${movieId}?api_key=${KEY}&language=en-US`,
      );
      console.log('state', data.title);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
