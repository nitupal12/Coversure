import axiosInstance from './client';

export const fetchUsersApi = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};
