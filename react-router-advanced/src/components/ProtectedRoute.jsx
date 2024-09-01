import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


function useAuth() {
    // Simulating user authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Logic to check if user is authenticated
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
  
    return { isAuthenticated, login, logout };
  }


const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
