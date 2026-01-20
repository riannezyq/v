import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
export const getCountries = () => api.get('/regulation/countries')
export const getCategories = () => api.get('/regulation/categories')
export const getRegulationStats = () => api.get('/regulation/stats')
export const getCaseList = (page = 0, size = 10) => api.get(`/case/list?page=${page}&size=${size}`)
export const getTotalCases = () => api.get('/case/total')
export default api
