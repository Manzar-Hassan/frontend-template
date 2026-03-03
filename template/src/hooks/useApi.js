import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'
import axiosInstance from '../lib/axios'

export const useApi = (options = {}) => {
  const { showErrorToast = true, showSuccessToast = false } = options
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (method, url, data = null, config = {}) => {
    try {
      setLoading(true)
      setError(null)
      
      const isFormData = data instanceof FormData
      const headers = {
        ...config.headers,
      }
      
      if (isFormData) {
        headers['Content-Type'] = 'multipart/form-data'
      }
      
      const response = await axiosInstance({
        method,
        url,
        data,
        ...config,
        headers,
      })
      
      if (showSuccessToast) {
        toast.success('Request completed successfully')
      }
      
      return { data: response.data, error: null }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred'
      setError(errorMessage)
      
      if (showErrorToast) {
        toast.error(errorMessage)
      }
      
      return { data: null, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }, [showErrorToast, showSuccessToast])

  const get = useCallback((url, config) => request('GET', url, null, config), [request])
  const post = useCallback((url, data, config) => request('POST', url, data, config), [request])
  const put = useCallback((url, data, config) => request('PUT', url, data, config), [request])
  const patch = useCallback((url, data, config) => request('PATCH', url, data, config), [request])
  const del = useCallback((url, config) => request('DELETE', url, null, config), [request])

  return {
    loading,
    error,
    get,
    post,
    put,
    patch,
    delete: del,
  }
}
