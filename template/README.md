# Vite + React Production Template

A modern, production-ready React template with comprehensive error handling, form validation, and API integration.

## Features

- ⚡ Vite - Lightning fast build tool
- ⚛️ React 18 - Latest React features
- 🛣️ TanStack Router - Type-safe routing
- 📡 Axios - HTTP client with interceptors
- ✅ Formik + Yup - Form handling and validation
- 🎨 Tailwind CSS - Utility-first styling
- 🔔 React Hot Toast - Modern toast notifications
- 🚨 SweetAlert2 - Beautiful alert modals
- 🛡️ Error Boundary - Graceful error handling
- ⏳ Page Loader - Loading states

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/      # Reusable components
├── features/        # Feature-based modules
├── lib/            # Utilities and configurations
├── pages/          # Page components
└── routes/         # TanStack Router routes
```

## Key Features

### Error Handling
- Global error boundary
- Axios interceptors for API errors
- User-friendly error messages
- Automatic retry mechanisms

### Form Validation
- Formik for form state management
- Yup for schema validation
- Real-time validation feedback
- Accessible error messages

### API Integration
- Configured axios instance
- Request/response interceptors
- Token management
- Timeout handling

### UI/UX
- Modern, responsive design
- Loading states
- Toast notifications
- Confirmation dialogs
- Smooth transitions
