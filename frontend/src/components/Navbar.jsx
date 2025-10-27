// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          BookMe
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">HOME</Link>
          <Link to="/stats" className="text-gray-600 hover:text-blue-600 font-medium">FIND STATS</Link>
          <Link to="/favorites" className="text-gray-600 hover:text-blue-600 font-medium">FAVORITES</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">CONTACT</Link>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-2">
          <Link
            to="/register"
            className="px-4 py-2 rounded-md text-blue-600 font-medium border border-blue-600 hover:bg-blue-50"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Simple hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link to="/" className="block px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">HOME</Link>
            <Link to="/stats" className="block px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">FIND STATS</Link>
            <Link to="/favorites" className="block px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">FAVORITES</Link>
            <Link to="/contact" className="block px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">CONTACT</Link>
            <hr />
            <Link to="/register" className="block px-2 py-2 text-center rounded-md text-blue-600 font-medium border border-blue-600 hover:bg-blue-50">
              Register
            </Link>
            <Link to="/login" className="block px-2 py-2 text-center rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;