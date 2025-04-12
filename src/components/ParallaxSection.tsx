import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  offset = 50,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;