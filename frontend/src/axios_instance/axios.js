import axios from 'axios'
import store from '../store/store'
import { logout, setToken } from '../store/authSlice'

const api = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true
})


api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
})

api.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await api.post("/refresh/");
        store.dispatch(setToken(res.data.access));
        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        return api(originalRequest);
      } catch {
        store.dispatch(logout());
      }
    }
    return Promise.reject(err);
  }
);

export default api;

