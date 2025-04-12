import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "The Future of Sustainable Construction",
      author: "Gaurav",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80",
      excerpt: "Exploring innovative sustainable construction practices and their impact on the future of building development.",
      category: "Construction",
      slug: "sustainable-construction"
    },
    {
      title: "Top Travel Destinations for 2024",
      author: "Pooja",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80",
      excerpt: "Discover the most exciting and trending travel destinations that should be on your radar this year.",
      category: "Travel",
      slug: "top-travel-destinations"
    },
    {
      title: "Breakthroughs in Research Methodology",
      author: "Gaurav",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80",
      excerpt: "New developments in research methodologies that are transforming how we approach scientific studies.",
      category: "Research",
      slug: "research-methodology"
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 dark:text-gray-300">Insights and updates from our experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;