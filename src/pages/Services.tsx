import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Building2, FlaskConical, Truck, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 dark:text-gray-300">Comprehensive solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
              alt="Travel Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Plane className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Travel & Tours</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover the world with our expertly curated travel experiences and professional tour management services.
              </p>
              <Link
                to="/services/travel"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
              alt="Construction Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Construction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expert construction management and consulting services for projects of any scale.
              </p>
              <Link
                to="/services/construction"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
              alt="Research Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FlaskConical className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Research & Development</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Innovative research solutions and development services to drive your business forward.
              </p>
              <Link
                to="/services/research"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
              alt="Transport Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Truck className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Transport</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Reliable and efficient transportation solutions for businesses across India.
              </p>
              <Link
                to="/services/transport"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;