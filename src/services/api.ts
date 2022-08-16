import axios, { AxiosRequestConfig, Method } from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    'Accept-Version': 1,
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const apiRequest = async (
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
) => {
  const response = await api.request({
    method,
    url,
    data: data ? data : {},
    ...config,
  });

  return response.data;
};
