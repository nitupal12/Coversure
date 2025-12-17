import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from './types';

export interface state {
  favUsers: UserType[];
}

const initialState: state = {
  favUsers: [],
};

export const favUsersReducer = createSlice({
  name: 'favUsers',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<UserType>) => {
      const exists = state.favUsers.some(user => user.id === action.payload.id);
      if (!exists) state.favUsers.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favUsers = state.favUsers.filter(
        user => user.id !== action.payload,
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favUsersReducer.actions;

export default favUsersReducer.reducer;
