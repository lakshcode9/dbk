import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const Post2 = () => {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Top Travel Destinations for 2024</h1>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-8">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">Pooja</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>March 12, 2024</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
            alt="Travel Destinations"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              As we embrace 2024, the world of travel continues to evolve, offering new experiences and rediscovered gems. From pristine beaches to cultural hotspots, this year's top destinations offer something for every type of traveler.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Himachal Pradesh, India</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Known as the "Land of Gods," Himachal Pradesh offers breathtaking mountain landscapes, ancient temples, and rich cultural experiences. The state's diverse terrain makes it perfect for adventure sports, spiritual journeys, and peaceful retreats.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">Must-Visit Spots:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Shimla - The Queen of Hills</li>
              <li>Manali - Adventure Sports Paradise</li>
              <li>Dharamshala - Home of the Dalai Lama</li>
              <li>Spiti Valley - The Middle Land</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Kerala, India</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Kerala, God's Own Country, continues to enchant visitors with its backwaters, beaches, and ayurvedic traditions. The state's commitment to sustainable tourism makes it a perfect destination for eco-conscious travelers.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Alleppey Backwaters</li>
              <li>Munnar Tea Gardens</li>
              <li>Kovalam Beach</li>
              <li>Wayanad Wildlife Sanctuary</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Rajasthan, India</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The Land of Kings offers a royal experience with its magnificent forts, palaces, and vibrant culture. The state's rich history, combined with modern luxury, creates an unforgettable travel experience.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">Must-Experience:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Jaipur's Pink City</li>
              <li>Udaipur's Lake Palace</li>
              <li>Jaisalmer Desert Safari</li>
              <li>Pushkar Fair</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Travel Tips for 2024</h2>
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Book accommodations in advance, especially during peak seasons</li>
                <li>Consider shoulder seasons for better deals and fewer crowds</li>
                <li>Research local customs and traditions</li>
                <li>Pack according to the destination's weather and cultural norms</li>
                <li>Keep emergency contacts and important documents handy</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Post2;