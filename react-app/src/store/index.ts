import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
