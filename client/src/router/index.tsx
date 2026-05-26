import { createHashRouter } from "react-router-dom";

import GlobalErrorPage from "../components/errors/GlobalErrorPage";
import RootLayout from "../components/layout/RootLayout";

import Home from "../features/products/pages/Home";
import Products from "../features/products/pages/Products";
import ProductDetail from "../features/products/pages/ProductDetail";
import Cart from "../features/cart/pages/Cart";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import Settings from "../features/settings/pages/Settings";
import { ProtectedRoute } from "../features/auth/pages/ProtectedRoute";

export const router = createHashRouter([
  // update
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <GlobalErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      {
        element: <ProtectedRoute />, // Wrap protected routes with ProtectedRoute
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
