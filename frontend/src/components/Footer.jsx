// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-blue-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">BookMe</h2>
          <p className="text-sm mb-4">Find Your Perfect Place to Stay</p>
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/book" className="hover:text-white">Book your stay</Link></li>
            <li><Link to="/host" className="hover:text-white">Become a Host</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/safety" className="hover:text-white">Safety Information</Link></li>
            <li><Link to="/cancellation" className="hover:text-white">Cancellation Option</Link></li>
            <li><Link to="/covid" className="hover:text-white">Our COVID-19 Response</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>+923041234567</li>
            <li>muhiris@bookme.com</li>
            <li>Glassplace, Near Cool Avenue, Boston</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;