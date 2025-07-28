import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to the Dashboard!</h1>
        <p className="text-gray-600 mt-4">You have successfully logged in.</p>
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto cursor-pointer flex-shrink-0 inline-flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
