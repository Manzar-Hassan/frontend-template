import { Link } from '@tanstack/react-router'
import { FiSearch, FiHome, FiArrowLeft } from 'react-icons/fi'

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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

      {/* 404 Content */}
      <div className="flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center animate-fade-in">
          {/* 404 Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-6">
            <FiSearch className="w-12 h-12 text-purple-600" />
          </div>

          {/* 404 Text */}
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2 min-w-[160px] justify-center">
              <FiHome className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center gap-2 min-w-[160px] justify-center"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Popular Pages */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Available Pages</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/" className="link text-sm">
                Error Showcase
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
