import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import authReducer from './auth/authReducer';

// =========== with localStorage====================
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    movies: reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);
const storePersistor = { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default storePersistor;
