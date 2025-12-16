import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/userThunks';
import { UserType } from './types';

export interface state {
  users: UserType[];
  loading: boolean;
  error: string | null;
}

const initialState: state = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = usersReducer.actions;

export default usersReducer.reducer;
