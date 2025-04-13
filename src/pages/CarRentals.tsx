import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Shield, Calendar, Info } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import { supabase } from '../lib/supabase';

const CarRentals = () => {
  const navigate = useNavigate();
  
  const cars = [
    {
      id: 1,
      name: "Maruti Swift Dzire",
      price: "2500/day",
      image: "https://images.unsplash.com/photo-1623006772851-a8bf2c47d24f?auto=format&fit=crop&q=80",
      features: [
        "Air Conditioning",
        "Power Steering",
        "Central Locking",
        "Music System"
      ]
    },
    {
      id: 2,
      name: "Toyota Etios",
      price: "2500/day",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
      features: [
        "Air Conditioning",
        "Power Steering",
        "ABS",
        "Airbags"
      ]
    },
    {
      id: 3,
      name: "Maruti Ertiga",
      price: "3500/day",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80",
      features: [
        "7 Seater",
        "Air Conditioning",
        "Power Windows",
        "Bluetooth Connectivity"
      ]
    },
    {
      id: 4,
      name: "Toyota Innova",
      price: "4000/day",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      features: [
        "8 Seater",
        "Climate Control",
        "Premium Interior",
        "Advanced Safety Features"
      ]
    },
    {
      id: 5,
      name: "Toyota Innova Crysta",
      price: "6000/day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&q=80",
      features: [
        "Luxury Interior",
        "Automatic Transmission",
        "Premium Sound System",
        "Advanced Safety Package"
      ]
    }
  ];

  const handleBooking = async (car: any) => {
    try {
      // Get current user using the current Supabase API
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('bookings')
        .insert([{
          user_id: user?.id,
          vehicle: car.name,
          price: car.price.replace('/day', ''),
          created_at: new Date().toISOString(),
          status: 'pending'
        }]);

      if (error) throw error;

      localStorage.setItem('selectedTour', JSON.stringify({
        title: `Car Rental Booking: ${car.name}`,
        type: 'car_rental',
        vehicle: car.name,
        price: car.price
      }));

      toast.success('Booking initiated! Please complete the contact form');
      setTimeout(() => {
        navigate('/contact');
      }, 2000);
    } catch (err) {
      toast.error('Booking failed. Please try again');
      console.error('Supabase error:', err);
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4">
        <Link 
          to="/services/travel" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Travel Services
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Car Rental Services</h1>
          <p className="text-gray-600">Choose from our fleet of well-maintained vehicles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <div className="flex items-center text-green-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Starting from ₹{car.price}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    Features:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {car.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleBooking(car)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                  <WhatsAppButton 
                    message={`Hi, I'm interested in renting the ${car.name} (₹${car.price}). Could you provide more information?`}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Rental Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Insurance Coverage</h3>
              <p className="text-gray-600">Comprehensive insurance included with all rentals</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Flexible Duration</h3>
              <p className="text-gray-600">Daily, weekly, and monthly rental options</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentals;