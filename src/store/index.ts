import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/userSlices';
import favUsersReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    favUsers: favUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
