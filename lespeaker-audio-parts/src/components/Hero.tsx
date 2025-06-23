"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Usando lucide para ícones

const slogan = "Potencialize seu som com quem entende";

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    rotateX: 10,
    rotateY: -10,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.95,
  }
};

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-dark-blue">
      {/* Podemos adicionar uma imagem de fundo aqui depois */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      
      <div className="relative z-20 flex flex-col items-center text-center p-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {slogan.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="px-8 py-4 text-lg font-semibold text-white rounded-lg backdrop-blur-sm bg-white/10 border border-white/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Nossos Serviços
          </motion.button>
          <motion.button
            className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-subtle-red rounded-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Ver Produtos <ArrowRight className="ml-2" size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 