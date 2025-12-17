import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUsersApi } from '../../api/userApi';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsersApi();
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
