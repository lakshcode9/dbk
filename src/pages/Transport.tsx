import React, { useState } from 'react';
import { Truck, Clock, Shield, MapPin, Phone, Search, Star, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import WhatsAppButton from '../components/WhatsAppButton';

const Transport = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState('');
  
  const services = [
    {
      title: "Small Goods Transport",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80",
      description: "Efficient transportation for small goods and parcels with reliable delivery service.",
      features: ["City delivery", "Express shipping", "Real-time tracking"]
    },
    {
      title: "Large Goods Transport",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80",
      description: "Heavy-duty transportation solutions for large cargo and commercial goods.",
      features: ["Interstate transport", "Loading/unloading", "Insurance coverage"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Ltd",
      content: "DBK's transport service has been exceptional. Their tracking system and timely delivery have helped our business tremendously.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Retail Express",
      content: "The most reliable transport service we've worked with. Their large goods transport has been crucial for our business expansion.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Global Traders",
      content: "Outstanding service and professional team. The real-time tracking feature gives us peace of mind.",
      rating: 4
    }
  ];

  const handleInquiry = (service: string) => {
    localStorage.setItem('selectedTour', JSON.stringify({
      title: `Transport Service Inquiry: ${service}`,
      type: 'transport',
      service: service
    }));
    toast.success('Please fill out the contact form for service inquiry');
    setTimeout(() => {
      navigate('/contact');
    }, 2000);
  };

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      toast.success('Tracking information will be sent to your registered email');
      setTrackingId('');
    } else {
      toast.error('Please enter a valid tracking ID');
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Transport Services</h1>
          <p className="text-gray-600">Reliable and efficient transportation solutions for your business</p>
        </div>

        {/* Tracking Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Track Your Shipment</h2>
          <form onSubmit={handleTracking} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter your tracking ID"
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Search className="w-4 h-4 mr-2" />
                Track
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Shield className="h-4 w-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => handleInquiry(service.title)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                  </button>
                  <WhatsAppButton 
                    message={`Hi, I'm interested in your ${service.title} service. Could you provide more information?`}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
                <Quote className="absolute top-4 right-4 text-blue-100 w-8 h-8" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Need a Custom Transport Solution?</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Contact our transport experts for personalized solutions tailored to your needs.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                <a 
                  href="tel:+919816307925"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  +91 7650801787 / +91 9816307925
                </a>
              </div>
              <WhatsAppButton 
                message="Hi, I need a custom transport solution. Could you help me?"
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Our Transport Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Truck className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Modern Fleet</h3>
              <p className="text-gray-600">Well-maintained vehicles for all cargo types</p>
            </div>
            <div className="text-center">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Timely Delivery</h3>
              <p className="text-gray-600">Punctual and reliable service</p>
            </div>
            <div className="text-center">
              <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Secure Transit</h3>
              <p className="text-gray-600">Enhanced security for your cargo</p>
            </div>
            <div className="text-center">
              <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Pan-India Network</h3>
              <p className="text-gray-600">Coverage across all major cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;