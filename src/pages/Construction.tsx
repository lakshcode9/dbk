import React from 'react';
import { Building2, CheckCircle, Clock, Users } from 'lucide-react';

const Construction = () => {
  const projects = [
    {
      title: "Modern Office Complex",
      location: "Himachal Pradesh",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      description: "A state-of-the-art office complex featuring sustainable design and smart building technology.",
    },
    {
      title: "Luxury Residential Tower",
      location: "Himachal Praadesh",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      description: "High-end residential development with premium amenities and spectacular views.",
    },
    {
      title: "Shopping Mall Renovation",
      location: "City Center",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1557004396-66e4174d7bf3?auto=format&fit=crop&q=80",
      description: "Complete renovation and modernization of an existing shopping center.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Construction Services</h1>
          <p className="text-gray-600">Expert construction management and consulting services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-green-600 mb-4">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>{project.status}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Construction Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Project Management</h3>
              <p className="text-gray-600">Comprehensive oversight of construction projects</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Timely Delivery</h3>
              <p className="text-gray-600">Efficient project execution and delivery</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals and consultants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;