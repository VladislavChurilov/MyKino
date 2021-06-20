import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IContact } from '../interfaces/interfaces';

type TSelector<R> = (state: RootState) => R;

export const getNewMovies: TSelector<IContact[] | []> = state =>
  state.movies.newMovies;
