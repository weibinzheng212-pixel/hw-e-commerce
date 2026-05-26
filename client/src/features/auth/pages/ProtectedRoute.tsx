import { useNavigate, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './Authcontext';

// if user is logged in/authenticated direct to page, if not, direct to login page
export const ProtectedRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  // Show a loading spinner or null while checking authentication status
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to login and save the current location
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};