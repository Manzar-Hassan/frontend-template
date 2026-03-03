import { Link } from '@tanstack/react-router'
import { FiAlertCircle, FiHome, FiRefreshCw } from 'react-icons/fi'

export const ErrorPage = ({ error }) => {
  const getErrorMessage = () => {
    if (error?.message) return error.message
    if (error?.statusText) return error.statusText
    return 'An unexpected error occurred'
  }

  const getErrorCode = () => {
    if (error?.status) return error.status
    return '500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium"
                activeProps={{ className: 'text-blue-600' }}
              >
                Error Showcase
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Error Content */}
      <div className="flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center animate-fade-in">
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <FiAlertCircle className="w-12 h-12 text-red-600" />
          </div>

          {/* Error Code */}
          <h1 className="text-8xl font-bold text-gray-900 mb-4">
            {getErrorCode()}
          </h1>

          {/* Error Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Something went wrong
          </h2>

          {/* Error Message */}
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            {getErrorMessage()}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2 min-w-[160px] justify-center">
              <FiHome className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="btn-secondary inline-flex items-center gap-2 min-w-[160px] justify-center"
            >
              <FiRefreshCw className="w-5 h-5" />
              Refresh Page
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Need help?</h3>
            <p className="text-sm text-gray-600">
              If this problem persists, please contact support or try again later.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
