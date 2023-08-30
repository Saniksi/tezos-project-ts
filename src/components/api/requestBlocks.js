import axios from 'axios';

export const requestBlocks = axios.create({
  baseURL: 'https://api.tzkt.io',
});

requestBlocks.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
requestBlocks.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
