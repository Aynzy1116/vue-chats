import axios from 'axios'

const request = axios.create({
  // API 请求的默认前缀
  baseURL: '/api',
  timeout: 60000 // 请求超时时间
})

export default request
