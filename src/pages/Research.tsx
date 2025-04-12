import React from 'react';
import { FlaskConical, Lightbulb, Target, TrendingUp } from 'lucide-react';

const Research = () => {
  const studies = [
    {
      title: "Market Analysis Study",
      sector: "Retail & E-commerce",
      status: "Published",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      description: "Comprehensive analysis of emerging trends in retail and e-commerce sectors.",
    },
    {
      title: "Technology Innovation Research",
      sector: "Information Technology",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      description: "Investigation of breakthrough technologies and their potential applications.",
    },
    {
      title: "Sustainability Impact Study",
      sector: "Environmental",
      status: "Published",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
      description: "Analysis of sustainable practices and their environmental impact.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research & Development</h1>
          <p className="text-gray-600">Driving innovation through cutting-edge research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {studies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FlaskConical className="h-4 w-4 mr-2" />
                  <span>{study.sector}</span>
                </div>
                <div className="flex items-center text-blue-600 mb-4">
                  <Target className="h-4 w-4 mr-2" />
                  <span>{study.status}</span>
                </div>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Research Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-gray-600">Pioneering research methodologies</p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Precision</h3>
              <p className="text-gray-600">Accurate and reliable research outcomes</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Impact</h3>
              <p className="text-gray-600">Research that drives real-world results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;