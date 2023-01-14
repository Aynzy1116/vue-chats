import axios from 'axios'
// import devconfig from '../config'

// const baseURL = process.env.NODE_ENV === 'development' ? devconfig.baseUrl.dev : devconfig.baseUrl.pro

const service = axios.create({
  baseURL: 'http://localhost:3010/api/',
  timeout: 10000
})

service.interceptors.request.use(config => {
  return config;
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  error => {
    return Promise.reject(new Error(error.response.data))
  }
)

export default service
