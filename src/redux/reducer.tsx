import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchNewMovies, fetchMovieDetail } from './operations';

// const movies = createReducer([], {
// [fetchProducts.fulfilled]: (_, { payload }) => payload,
//   [getCurrentProducts.fulfilled]: (_, { payload }) => payload,
//   [fetchNextPage.fulfilled]: (_, { payload }) => payload,
//   [fetchFilteredProducts.fulfilled]: (_, { payload }) => payload,
// });
// fetchNewMovies;

const newMovies = createReducer([], {
  [fetchNewMovies.fulfilled.type]: (_, { payload }) => payload,
});
const movieDetail = createReducer(
  {},
  {
    [fetchMovieDetail.fulfilled.type]: (_, { payload }) => payload,
  },
);

const filter = createReducer([], {
  //   [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  //   [fetchProducts.pending]: () => true,
  //   [fetchProducts.fulfilled]: () => false,
  //   [fetchProducts.rejected]: () => false,
  [fetchMovieDetail.pending.type]: () => true,
  [fetchMovieDetail.fulfilled.type]: () => false,
  [fetchMovieDetail.rejected.type]: () => false,
  //   [fetchFilteredProducts.pending]: () => true,
  //   [fetchFilteredProducts.fulfilled]: () => false,
  //   [fetchFilteredProducts.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  // movies,
  newMovies,
  movieDetail,
  filter,
  loading,
  error,
});
