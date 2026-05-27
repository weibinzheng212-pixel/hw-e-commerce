import { createHashRouter } from "react-router-dom";

import GlobalErrorPage from "../components/errors/GlobalErrorPage";
import RootLayout from "../components/layout/RootLayout";

// import Home from "../features/products/pages/Home";
// import Products from "../features/products/pages/Products";
import ProductDetail from "../features/products/pages/ProductDetail";
// import Cart from "../features/cart/pages/Cart";
// import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
// import Settings from "../features/settings/pages/Settings";
import { ProtectedRoute } from "../features/auth/pages/ProtectedRoute";
import { lazy, Suspense } from "react";
import RouteErrorBoundary from "../components/errors/RouteErrorBoundary";
import { ErrorBoundaryFallback } from "../components/errors/ErrorBoundaryFallback";



const Home = lazy(() => import("../features/products/pages/Home"));
const Cart = lazy(() => import("../features/cart/pages/Cart"));
const Settings = lazy(() => import("../features/settings/pages/Settings"));
const Login = lazy(() => import('../features/auth/pages/Login'));
const SignUp = lazy(() => import('../features/auth/pages/Signup'));
const Products = lazy(() => import('../features/products/pages/Products'));


const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
    <Component />
  </Suspense>
);

export const router = createHashRouter([
  // update
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <GlobalErrorPage />,
    children: [
      { index: true, element: withSuspense(Home), 
        errorElement: <ErrorBoundaryFallback />
      },
      { path: "products", element: withSuspense(Products),
                errorElement: <ErrorBoundaryFallback />

      },
      {
        path: "products/:id",
        element: <ProductDetail />,
        errorElement: <ErrorBoundaryFallback />
      },
      { path: "login", element: withSuspense(Login), errorElement: <ErrorBoundaryFallback /> },
      { path: "signup", element: withSuspense(SignUp), errorElement: <ErrorBoundaryFallback /> },

      {
        element: <ProtectedRoute />, // Wrap protected routes with ProtectedRoute
        children: [
          {
            path: "cart",
            element: withSuspense(Cart),
          },
          {
            path: "settings",
            element: withSuspense(Settings),
            errorElement: <ErrorBoundaryFallback />
          },
        ],
      },
    ],
  },
]);
