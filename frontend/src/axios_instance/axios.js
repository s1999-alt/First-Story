import axios from 'axios'
import store from '../store/store'

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true
})


api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
})


api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  res => res,
  async err => {
    if (err.response.status === 401) {
      try {
        const res = await api.post("/refresh/");
        store.dispatch(setToken(res.data.access));
        err.config.headers.Authorization = `Bearer ${res.data.access}`;
        return api(err.config);
      } catch {
        store.dispatch(logout());
      }
    }
    return Promise.reject(err);
  }
);

export default api;

