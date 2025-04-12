import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message, className = '' }) => {
  const phoneNumber = '917650801787';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center ${className}`}
      aria-label="Inquire via WhatsApp"
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      WhatsApp
    </button>
  );
};

export default WhatsAppButton;