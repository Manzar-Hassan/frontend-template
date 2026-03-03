import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Suspense } from 'react'
import { PageLoader } from '../components/PageLoader'
import { ErrorShowcasePage } from '../pages/ErrorShowcasePage'
import { ErrorPage } from '../pages/ErrorPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </Suspense>
  ),
  errorComponent: ErrorPage,
  notFoundComponent: NotFoundPage,
  pendingComponent: PageLoader,
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ErrorShowcasePage,
})

// Test routes to preview error pages
export const errorTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/test-error',
  component: () => <ErrorPage error={{ message: 'This is a test error message', status: 500 }} />,
})

export const notFoundTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/test-404',
  component: NotFoundPage,
})

export const routeTree = rootRoute.addChildren([indexRoute, errorTestRoute, notFoundTestRoute])
