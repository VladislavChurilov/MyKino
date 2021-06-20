import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchNewMovies } from './operations';

const movies = createReducer([], {
  // [fetchProducts.fulfilled]: (_, { payload }) => payload,
  //   [getCurrentProducts.fulfilled]: (_, { payload }) => payload,
  //   [fetchNextPage.fulfilled]: (_, { payload }) => payload,
  //   [fetchFilteredProducts.fulfilled]: (_, { payload }) => payload,
});
// fetchNewMovies;

const newMovies = createReducer([], {
  [fetchNewMovies.fulfilled.type]: (_, { payload }) => payload,
});

const filter = createReducer([], {
  //   [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  //   [fetchProducts.pending]: () => true,
  //   [fetchProducts.fulfilled]: () => false,
  //   [fetchProducts.rejected]: () => false,
  //   [fetchNextPage.pending]: () => true,
  //   [fetchNextPage.fulfilled]: () => false,
  //   [fetchNextPage.rejected]: () => false,
  //   [fetchFilteredProducts.pending]: () => true,
  //   [fetchFilteredProducts.fulfilled]: () => false,
  //   [fetchFilteredProducts.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  movies,
  newMovies,
  filter,
  loading,
  error,
});
