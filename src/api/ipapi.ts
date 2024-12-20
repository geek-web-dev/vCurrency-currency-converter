import axios from "axios";

export const ip_api = axios.create();

ip_api.interceptors.request.use(
  (config) => {
    const parameter = config.params?.parameter || "";
    config.baseURL = `${import.meta.env.VITE_IP_API}${parameter}/json`;
    return config;
  },
  (error) => Promise.reject(error)
);
