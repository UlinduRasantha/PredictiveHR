import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    // If there is no token, redirect to the /login page
    return <Navigate to="/login" />;
  }

  // If there is a token, render the child components
  return children;
};

export default ProtectedRoute;