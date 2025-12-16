import axois from 'axios';

const axiosInstance = axois.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

// 🔁 Retry logic (2 retries)
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const config = error.config;

    if (!config) return Promise.reject(error);

    config.__retryCount = config.__retryCount || 0;

    if (config.__retryCount < 2) {
      config.__retryCount += 1;

      // optional delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      return axiosInstance(config);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
