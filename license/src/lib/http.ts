import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:7001' : ''

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.res === 1) {
    return Promise.reject(res.data.data)
  }
  return res.data
}),(err: any) => {
  return Promise.reject(err)
}

export default axios