import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = '917650801787'; // Format: country code + phone number
  const message = 'Hello! I would like to know more about your services.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute right-full mr-3 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppFloat;