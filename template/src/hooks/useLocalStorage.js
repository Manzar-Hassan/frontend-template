import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'

export const useLocalStorage = (key, initialValue, options = {}) => {
  const { showErrorToast = false } = options
  
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      if (showErrorToast) {
        toast.error('Failed to load saved data')
      }
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      return true
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
      if (showErrorToast) {
        toast.error('Failed to save data')
      }
      return false
    }
  }, [key, storedValue, showErrorToast])

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
      return true
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
      if (showErrorToast) {
        toast.error('Failed to remove saved data')
      }
      return false
    }
  }, [key, initialValue, showErrorToast])

  return [storedValue, setValue, removeValue]
}
