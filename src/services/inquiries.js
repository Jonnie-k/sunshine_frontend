import api from './api'

export const sendInquiry = (data) => api.post('/inquiries', data)