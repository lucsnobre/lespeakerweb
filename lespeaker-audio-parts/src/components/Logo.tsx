import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <motion.div 
        className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center shadow-lg"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <div className="w-3 h-3 rounded-full bg-brand-dark" />
      </motion.div>
      <span className="text-2xl font-bold text-brand-light tracking-tighter">Lespeaker</span>
    </div>
  );
};

export default Logo; 