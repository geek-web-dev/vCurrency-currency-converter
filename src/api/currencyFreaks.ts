import axios from "axios";

export const currency_api = axios.create({
  baseURL: import.meta.env.VITE_CURRENCY_FREAKS_API,
});

// currency_api.interceptors.request.use(
//   (config) => {
//     config.params = {
//       ...config.params,
//       apikey: import.meta.env.VITE_CURRENCY_FREAKS_API_KEY,
//     };
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// currency_api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("ACCESS_TOKEN");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

currency_api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
