import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DBK Consultancy</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              Your trusted partner in travel, construction, and research development.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 dark:text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/travel" className="text-gray-300 dark:text-gray-400 hover:text-white">Travel & Tours</Link></li>
              <li><Link to="/services/construction" className="text-gray-300 dark:text-gray-400 hover:text-white">Construction</Link></li>
              <li><Link to="/services/research" className="text-gray-300 dark:text-gray-400 hover:text-white">Research & Development</Link></li>
              <li><Link to="/services/transport" className="text-gray-300 dark:text-gray-400 hover:text-white">Transport</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-600 text-center">
          <p className="text-gray-300 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} DBK Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;