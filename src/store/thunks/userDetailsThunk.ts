import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUserDetailsApi } from '../../api/userDetail';

export const fetchUserDetails = createAsyncThunk(
  'users/fetchUsersDetails',
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await fetchUserDetailsApi(id);
      return data;
    } catch (error: unknown) {
      // Axios error
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || error.message || 'Network error',
        );
      }

      // Non-axios error
      return rejectWithValue('Something went wrong');
    }
  },
);
