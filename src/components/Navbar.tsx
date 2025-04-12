import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2, Plane, FlaskConical, Truck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">DBK Consultancy</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Home</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">About</Link>
            <div className="relative group">
              <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Services</Link>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg hidden group-hover:block">
                <Link to="/services/travel" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Plane className="inline-block w-4 h-4 mr-2" />Travel & Tours
                </Link>
                <Link to="/services/construction" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Building2 className="inline-block w-4 h-4 mr-2" />Construction
                </Link>
                <Link to="/services/research" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FlaskConical className="inline-block w-4 h-4 mr-2" />R&D
                </Link>
                <Link to="/services/transport" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Truck className="inline-block w-4 h-4 mr-2" />Transport
                </Link>
              </div>
            </div>
            <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Blog</Link>
            <Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Careers</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="pt-16 pb-3 space-y-1 sm:px-3">
            <div className="flex justify-end px-4">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <Link 
              to="/" 
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="border-b dark:border-gray-700">
              <Link 
                to="/services" 
                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/services/travel" 
                className="block px-4 py-2 pl-8 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <Plane className="inline-block w-4 h-4 mr-2" />Travel & Tours
              </Link>
              <Link 
                to="/services/construction" 
                className="block px-4 py-2 pl-8 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="inline-block w-4 h-4 mr-2" />Construction
              </Link>
              <Link 
                to="/services/research" 
                className="block px-4 py-2 pl-8 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <FlaskConical className="inline-block w-4 h-4 mr-2" />R&D
              </Link>
              <Link 
                to="/services/transport" 
                className="block px-4 py-2 pl-8 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <Truck className="inline-block w-4 h-4 mr-2" />Transport
              </Link>
            </div>
            <Link 
              to="/blog" 
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/careers" 
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;