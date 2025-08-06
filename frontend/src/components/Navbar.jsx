import React, { useState } from "react";
import { BarChart3, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onHomePage = location.pathname === "/";
  const onDashboard = location.pathname === "/dashboard";

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                PredictiveHR
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {onHomePage && (
                  <Link
                    to="/dashboard"
                    className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                )}
                {onDashboard && (
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 font-medium hover:text-blue-600 transition-colors px-3 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {isAuthenticated ? (
              <>
                {/* 6. Same logic for mobile menu */}
                {onHomePage && (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-left bg-green-600 text-white block px-3 py-2 rounded-md text-base font-semibold hover:bg-green-700"
                  >
                    Go to Dashboard
                  </Link>
                )}
                {onDashboard && (
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-semibold hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
