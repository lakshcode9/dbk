import React from 'react';
import { Plane, Map, Calendar, Users, Car, Bike, Phone, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import WhatsAppButton from '../components/WhatsAppButton';

const Travel = () => {
  const navigate = useNavigate();
  const tours = [
    {
      id: 1,
      title: "HoneyMoon Manali",
      duration: "3 nights and 4 days",
      price: "Starting from Rs. 6,999",
      image: "https://shimlamanalitourism.in/images/deals/8.jpg",
      description: "Accommodation on twin sharing basis. 3 breakfasts and 3 dinners in hotel",
    },
    {
      id: 2,
      title: "Best of Manali Shimla",
      duration: "05 nights and 6 days",
      price: "Starting from Rs. 8,500",
      image: "https://shimlamanalitourism.in/images/deals/7.jpg",
      description: "Accommodation on twin sharing basis. 5 breakfasts and 5 Dinner in Hotel",
    },
    {
      id: 3,
      title: "Heaven Himachal",
      duration: "8 nights and 9 days",
      price: "Starting from Rs. 15,500",
      image: "https://shimlamanalitourism.in/images/deals/1.jpg",
      description: "Accommodation on twin sharing basis. 4 breakfasts and 4 Dinner in Hotel",
    },
    {
      id: 4,
      title: "Trip to Leh Ladakh",
      duration: "7 nights and 8 days",
      price: "Starting from Rs. 22,999",
      image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&q=80",
      description: "Experience the breathtaking beauty of Ladakh with accommodation, meals, and guided tours included",
    },
  ];

  const rentals = [
    {
      type: "Bike",
      description: "Wide range of bikes available for rent including Royal Enfield and other popular models",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80"
    },
    {
      type: "Car",
      description: "Various cars available for rent including SUVs and luxury vehicles",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80"
    }
  ];

  const handleBookNow = (tourId: number) => {
    localStorage.setItem('selectedTour', JSON.stringify(tours.find(tour => tour.id === tourId)));
    toast.success('Please fill out the contact form to complete your booking');
    setTimeout(() => {
      navigate('/contact');
    }, 2000);
  };

  const handleRentalInquiry = (vehicleType: string) => {
    if (vehicleType === "Car") {
      navigate('/services/travel/car-rentals');
      return;
    }

    localStorage.setItem('selectedTour', JSON.stringify({
      title: `Vehicle Rental Inquiry: ${vehicleType}`,
      type: 'rental',
      vehicle: vehicleType
    }));
    toast.success('Please fill out the contact form for rental inquiry');
    setTimeout(() => {
      navigate('/contact');
    }, 2000);
  };

  return (
    <div className="bg-gray-50 py-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel & Tours</h1>
          <p className="text-gray-600">Discover the world with our expertly curated travel experiences</p>
        </div>

        {/* Tour Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-semibold">{tour.price}</span>
                    <button 
                      onClick={() => handleBookNow(tour.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                  <WhatsAppButton 
                    message={`Hi, I'm interested in the ${tour.title} tour package (${tour.duration}, ${tour.price}). Could you provide more information?`}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Rentals */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Vehicle Rentals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rentals.map((rental) => (
              <div key={rental.type} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={rental.image}
                  alt={`${rental.type} Rental`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    {rental.type === "Bike" ? <Bike className="mr-2" /> : <Car className="mr-2" />}
                    {rental.type} Rentals
                  </h3>
                  <p className="text-gray-600 mb-4">{rental.description}</p>
                  <div className="flex flex-col space-y-2">
                    <button 
                      onClick={() => handleRentalInquiry(rental.type)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <WhatsAppButton 
                      message={`Hi, I'm interested in your ${rental.type} rental services. Could you provide more information?`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Need Help Planning Your Trip?</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Our travel experts are here to help you plan the perfect trip. Contact us for personalized assistance.
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
                message="Hi, I need help planning my trip. Could you assist me?"
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Travel Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Plane className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Expert Planning</h3>
              <p className="text-gray-600">Personalized itineraries crafted by travel experts</p>
            </div>
            <div className="text-center">
              <Map className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Pan-India Coverage</h3>
              <p className="text-gray-600">Destinations across all states</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance during your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;