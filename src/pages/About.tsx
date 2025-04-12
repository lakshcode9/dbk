import React from 'react';
import { Building } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About DBK Consultancy</h1>
          <p className="text-gray-600 dark:text-gray-300">Your trusted partner in business excellence</p>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Building className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            DBK Consultancy was founded with a vision to provide comprehensive solutions across travel, construction, and research sectors. With years of industry experience and a dedicated team of experts, we've established ourselves as a leading consultancy firm committed to delivering excellence in every project we undertake.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to empower businesses and individuals with innovative solutions and expert guidance, helping them achieve their goals and realize their vision. We combine industry expertise with cutting-edge technology to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading consultancy firm known for innovation, reliability, and excellence across our service domains.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Integrity, innovation, excellence, and customer satisfaction form the cornerstone of our business philosophy.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We take a collaborative, client-focused approach, ensuring tailored solutions that address specific needs and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;