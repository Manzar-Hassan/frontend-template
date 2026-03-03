import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { FiAlertCircle, FiHome } from 'react-icons/fi'
import { showAlert } from '../lib/sweetalert'
import { useApi } from '../hooks/useApi'
import { PageLoader } from '../components/PageLoader'

export const ErrorShowcasePage = () => {
  const [componentError, setComponentError] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const { get, loading } = useApi({ showSuccessToast: true })

  // Component that throws an error for ErrorBoundary testing
  const ErrorThrowingComponent = () => {
    if (componentError) {
      throw new Error('This is a React component error caught by ErrorBoundary!')
    }
    return null
  }

  const handleJavaScriptError = () => {
    // This will throw an uncaught error
    throw new Error('Uncaught JavaScript Error!')
  }

  const handleAsyncError = async () => {
    try {
      // Simulate async operation failure
      await new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Async operation failed!')), 100)
      )
    } catch (error) {
      console.error('Async error:', error)
      showAlert.error('Async Error', error.message)
    }
  }

  const handleNetworkError = async () => {
    try {
      const response = await fetch('https://httpstat.us/500')
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
      }
    } catch (error) {
      console.error('Network error:', error)
      showAlert.error('Network Error', error.message)
    }
  }

  const handleTypeError = () => {
    try {
      const obj = null
      obj.someMethod() // This will throw TypeError
    } catch (error) {
      console.error('Type error:', error)
      showAlert.error('Type Error', error.message)
    }
  }

  const handleReferenceError = () => {
    try {
      // Using eval to trigger ReferenceError without linting issues
      eval('undefined Variable')
    } catch (error) {
      console.error('Reference error:', error)
      showAlert.error('ReferenceError', error.message)
    }
  }

  const handleApiTest = async () => {
    const { data, error } = await get('/api/test')
    if (data) {
      showAlert.success('API Success', JSON.stringify(data, null, 2))
    }
  }

  const handleShowLoader = () => {
    setShowLoader(true)
    setTimeout(() => setShowLoader(false), 3000)
  }

  const handleComponentError = () => {
    setComponentError(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <FiAlertCircle className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-gray-900">Error Showcase</span>
            </div>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium inline-flex items-center gap-2"
            >
              <FiHome className="w-5 h-5" />
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Error Handling Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test different error scenarios and see how the application handles them
          </p>
        </div>

        {/* Error Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* 404 Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">404 Not Found</h3>
            <p className="text-sm text-gray-600 mb-4">
              Navigate to a non-existent route to see the 404 page
            </p>
            <Link
              to="/non-existent-route"
              className="btn-primary w-full block text-center"
            >
              Trigger 404
            </Link>
          </div>

          {/* Component Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Component Error</h3>
            <p className="text-sm text-gray-600 mb-4">
              Trigger a React component error caught by ErrorBoundary
            </p>
            <button
              onClick={handleComponentError}
              className="btn-primary w-full bg-red-600 hover:bg-red-700"
            >
              Throw Component Error
            </button>
          </div>

          {/* JavaScript Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Uncaught Error</h3>
            <p className="text-sm text-gray-600 mb-4">
              Throw an uncaught JavaScript error
            </p>
            <button
              onClick={handleJavaScriptError}
              className="btn-primary w-full bg-yellow-600 hover:bg-yellow-700"
            >
              Throw JS Error
            </button>
          </div>

          {/* Network Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Error</h3>
            <p className="text-sm text-gray-600 mb-4">
              Simulate a failed HTTP request (500 error)
            </p>
            <button
              onClick={handleNetworkError}
              className="btn-primary w-full bg-blue-600 hover:bg-blue-700"
            >
              Trigger Network Error
            </button>
          </div>

          {/* Async Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Async Error</h3>
            <p className="text-sm text-gray-600 mb-4">
              Trigger an error in an async operation
            </p>
            <button
              onClick={handleAsyncError}
              className="btn-primary w-full bg-green-600 hover:bg-green-700"
            >
              Trigger Async Error
            </button>
          </div>

          {/* Type Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔤</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Type Error</h3>
            <p className="text-sm text-gray-600 mb-4">
              Attempt to call a method on null/undefined
            </p>
            <button
              onClick={handleTypeError}
              className="btn-primary w-full bg-orange-600 hover:bg-orange-700"
            >
              Trigger Type Error
            </button>
          </div>

          {/* Reference Error */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ReferenceError</h3>
            <p className="text-sm text-gray-600 mb-4">
              Access an undefined variable
            </p>
            <button
              onClick={handleReferenceError}
              className="btn-primary w-full bg-pink-600 hover:bg-pink-700"
            >
              Trigger ReferenceError
            </button>
          </div>

          {/* 500 Error Page */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">500 Error Page</h3>
            <p className="text-sm text-gray-600 mb-4">
              View the generic error page component
            </p>
            <Link to="/test-error" className="btn-primary w-full block text-center">
              View Error Page
            </Link>
          </div>

          {/* 404 Error Page */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚫</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">404 Error Page</h3>
            <p className="text-sm text-gray-600 mb-4">
              View the not found page component
            </p>
            <Link to="/test-404" className="btn-primary w-full block text-center bg-purple-600 hover:bg-purple-700">
              View 404 Page
            </Link>
          </div>

          {/* API Test */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔌</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">API Test</h3>
            <p className="text-sm text-gray-600 mb-4">
              Test the demo API call using useApi hook
            </p>
            <button
              onClick={handleApiTest}
              disabled={loading}
              className="btn-primary w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Test API Call'}
            </button>
          </div>

          {/* Loading Screen */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⏳</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Screen</h3>
            <p className="text-sm text-gray-600 mb-4">
              Display the loading screen for 3 seconds
            </p>
            <button
              onClick={handleShowLoader}
              className="btn-primary w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Show Loader
            </button>
          </div>
        </div>

        {/* Error Component (will throw if triggered) */}
        <ErrorThrowingComponent />

        {/* Loading Screen Overlay */}
        {showLoader && <PageLoader />}

        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Showcase</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              This page demonstrates various error scenarios and how the application handles them:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>404 Not Found:</strong> Routing errors when navigating to non-existent pages</li>
              <li><strong>Component Error:</strong> React component errors caught by ErrorBoundary</li>
              <li><strong>Uncaught Error:</strong> JavaScript errors that aren't caught</li>
              <li><strong>Network Error:</strong> Failed HTTP requests and API errors</li>
              <li><strong>Async Error:</strong> Errors in asynchronous operations</li>
              <li><strong>Type Error:</strong> Attempting operations on null/undefined values</li>
              <li><strong>ReferenceError:</strong> Accessing undefined variables</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Check the browser console to see error logs and stack traces.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
