import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className = '',
  isLoading = false,
  ...props
}) => {
  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg px-8 py-3
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500
        text-white font-medium
        transition-all duration-300
        hover:scale-105
        disabled:opacity-70 disabled:cursor-not-allowed
        dark:from-blue-500 dark:via-purple-500 dark:to-pink-400
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-400"
        style={{
          filter: 'blur(15px)',
          transform: 'translate(-10%, -10%) scale(1.2)',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
    </motion.button>
  );
};

export default GradientButton;