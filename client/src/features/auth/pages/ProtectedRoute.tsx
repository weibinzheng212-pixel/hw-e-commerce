import { useNavigate, Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from './Auth';

// if user is logged in/authenticated direct to page, if not, direct to login page
export const ProtectedRoute = () => {
  const { isAuthenticated  } = useAuth();
  const location = useLocation();
  

  // Show a loading spinner or null while checking authentication status
  // if (isLoading ) {
  //   return <div>Loading...</div>;
  // }

  // If not authenticated, redirect to login and save the current location
  if (!isAuthenticated ) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 

  // If authenticated, render the child routes
  return <Outlet />;
};