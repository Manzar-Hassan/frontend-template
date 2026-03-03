import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FiCheckCircle, FiXCircle, FiAlertTriangle, FiAlertCircle } from 'react-icons/fi'

const MySwal = withReactContent(Swal)

const CustomIcon = ({ children, bgColor }) => (
  <div style={{
    width: '80px',
    height: '80px',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: bgColor,
  }}>
    {children}
  </div>
)

export const showAlert = {
  success: (title, text) => {
    return MySwal.fire({
      html: (
        <div>
          <CustomIcon bgColor="#dcfce7">
            <FiCheckCircle size={40} color="#16a34a" />
          </CustomIcon>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{text}</p>
        </div>
      ),
      showConfirmButton: true,
      confirmButtonText: '<span style="color: white; font-weight: 600;">Great!</span>',
      buttonsStyling: false,
      width: '400px',
      customClass: {
        popup: 'rounded-2xl shadow-2xl',
        confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm',
      },
    })
  },

  error: (title, text) => {
    return MySwal.fire({
      html: (
        <div>
          <CustomIcon bgColor="#fee2e2">
            <FiXCircle size={40} color="#dc2626" />
          </CustomIcon>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{text}</p>
        </div>
      ),
      showConfirmButton: true,
      confirmButtonText: '<span style="color: white; font-weight: 600;">Got it</span>',
      buttonsStyling: false,
      width: '400px',
      customClass: {
        popup: 'rounded-2xl shadow-2xl',
        confirmButton: 'bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm',
      },
    })
  },

  warning: (title, text) => {
    return MySwal.fire({
      html: (
        <div>
          <CustomIcon bgColor="#fef3c7">
            <FiAlertTriangle size={40} color="#d97706" />
          </CustomIcon>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{text}</p>
        </div>
      ),
      showConfirmButton: true,
      confirmButtonText: '<span style="color: white; font-weight: 600;">Understood</span>',
      buttonsStyling: false,
      width: '400px',
      customClass: {
        popup: 'rounded-2xl shadow-2xl',
        confirmButton: 'bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm',
      },
    })
  },

  confirm: (title, text) => {
    return MySwal.fire({
      html: (
        <div>
          <CustomIcon bgColor="#fef3c7">
            <FiAlertCircle size={40} color="#d97706" />
          </CustomIcon>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{text}</p>
        </div>
      ),
      showCancelButton: true,
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#e5e7eb',
      confirmButtonText: '<span style="color: white; font-weight: 600;">Yes</span>',
      cancelButtonText: '<span style="color: #374151; font-weight: 600;">Cancel</span>',
      reverseButtons: true,
      buttonsStyling: false,
      width: '400px',
      customClass: {
        popup: 'rounded-2xl shadow-2xl',
        confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mr-2 text-sm',
        cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-all duration-200 text-sm',
        actions: 'gap-2',
      },
    })
  },

  loading: (title = 'Loading...') => {
    return MySwal.fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      width: '350px',
      didOpen: () => {
        Swal.showLoading()
      },
      customClass: {
        popup: 'rounded-2xl shadow-2xl',
        title: 'text-base font-semibold text-gray-900',
      },
    })
  },

  close: () => {
    MySwal.close()
  },
}

export default MySwal
