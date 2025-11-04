import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:5000'

export const api = axios.create({
  baseURL: `${API_BASE}/api`,
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message || error.message || 'Unexpected server error'
    return Promise.reject(new Error(message))
  },
)
