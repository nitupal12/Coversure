import { createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails } from '../thunks/userDetailsThunk';
import { UserType } from './types';

export interface state {
  usersDetail: UserType;
  loading: boolean;
  error: string | null;
}

const initialState: state = {
  usersDetail: {},
  loading: true,
  error: null,
};

export const usersDetailsReducer = createSlice({
  name: 'usersDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.usersDetail = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = usersDetailsReducer.actions;

export default usersDetailsReducer.reducer;
