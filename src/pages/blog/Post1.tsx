import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const Post1 = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">The Future of Sustainable Construction</h1>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-8">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">Gaurav</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>March 15, 2024</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
            alt="Sustainable Construction"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              The construction industry stands at a pivotal moment in its evolution, with sustainability becoming not just a buzzword but a fundamental necessity. As we face increasing environmental challenges and resource constraints, the future of construction lies in innovative sustainable practices that can revolutionize how we build.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Key Trends in Sustainable Construction</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">1. Green Building Materials</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The development and adoption of eco-friendly building materials is accelerating. From recycled steel and reclaimed wood to innovative materials like self-healing concrete and transparent wood, these alternatives are reducing environmental impact while offering superior performance.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">2. Energy Efficiency</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Modern buildings are being designed with energy efficiency at their core. Smart windows, advanced insulation materials, and energy-efficient HVAC systems are becoming standard features rather than luxury additions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">3. Waste Reduction</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Construction waste management is evolving with better recycling practices and precise material ordering through Building Information Modeling (BIM). This not only reduces environmental impact but also cuts costs significantly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">The Role of Technology</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Technology is playing a crucial role in enabling sustainable construction practices. From 3D printing reducing material waste to IoT sensors optimizing energy usage, technological innovations are making sustainable construction more efficient and cost-effective than ever before.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Looking Ahead</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The future of sustainable construction is bright, with continuous innovations and increasing adoption of green practices. As regulations tighten and public awareness grows, sustainable construction will become the norm rather than the exception.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Sustainable materials are becoming more advanced and accessible</li>
                <li>Energy efficiency is a core consideration in modern construction</li>
                <li>Technology is enabling better waste management and resource utilization</li>
                <li>The industry is moving towards comprehensive sustainability</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Post1;