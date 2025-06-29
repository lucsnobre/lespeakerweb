import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div 
        className="relative w-10 h-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <Image
          src="/logoles.png"
          alt="Lespeaker Logo"
          fill
          className="object-contain"
          sizes="40px"
          priority
        />
      </motion.div>
      <span className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors duration-300">
        Lespeaker
      </span>
    </Link>
  );
};

export default Logo; 