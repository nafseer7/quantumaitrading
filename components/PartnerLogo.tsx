'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PartnerLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const PartnerLogo = ({ src, alt, width = 120, height = 40 }: PartnerLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </motion.div>
  );
};

export default PartnerLogo; 