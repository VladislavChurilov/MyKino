// import { createSelector } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState } from './store';
import { IMovie } from '../interfaces/interfaces';

type TSelector<R> = (state: RootState) => R;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getNewMovies: TSelector<IMovie[] | []> = state =>
  state.movies.newMovies;

export const getMovieDetail: TSelector<any | IMovie> = state =>
  state.movies.movieDetail;
// (state: RootState)  //: TSelector<IMovie[] | []>
