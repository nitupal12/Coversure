import axiosInstance from './client';

export const fetchUserDetailsApi = async (id: number) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};
