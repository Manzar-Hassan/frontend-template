import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { ErrorBoundary } from './components/ErrorBoundary'
import { routeTree } from './routes/routes'
import './index.css'

const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
})

// Global error handlers
const handleGlobalError = (event) => {
  console.error('Global error:', event.error)
  toast.error('An unexpected error occurred')
}

const handleUnhandledRejection = (event) => {
  console.error('Unhandled promise rejection:', event.reason)
  toast.error('An unexpected error occurred')
  event.preventDefault()
}

// App wrapper to manage global error handlers
const App = () => {
  useEffect(() => {
    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '10px',
            padding: '12px 16px',
            fontSize: '14px',
            maxWidth: '400px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
