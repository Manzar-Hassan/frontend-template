import { Link } from '@tanstack/react-router'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                activeProps={{ className: 'text-blue-600' }}
              >
                Home
              </Link>
              <Link 
                to="/example" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                activeProps={{ className: 'text-blue-600' }}
              >
                Example
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
