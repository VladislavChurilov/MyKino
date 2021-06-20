import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.themoviedb.org/';
const KEY = '300595d929d6a6ebde3ac2741883f41c';

const token = {
  set(token: string | null) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`auth/login?`, credentials);
      token.set(response.data.access_token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('auth/logout');
      token.unset();
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
