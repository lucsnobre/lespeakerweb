import { motion } from 'framer-motion';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.div 
        className="relative w-8 h-8 flex-shrink-0"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <Image
          src="/lespeaker-logo.png"
          alt="Lespeaker Logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 24px, 32px"
          priority
        />
      </motion.div>
      <span className="text-2xl font-bold text-foreground tracking-tighter">Lespeaker</span>
    </div>
  );
};

export default Logo; 