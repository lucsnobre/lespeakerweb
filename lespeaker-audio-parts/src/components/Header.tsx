"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import Logo from './Logo';

const navItems = ["Serviços", "Projetos", "Sobre", "Contato"];

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 w-full bg-background/50 backdrop-blur-lg border-b border-border/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 font-title"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-end flex-shrink-0">
              <motion.button
                className="px-5 py-2 text-sm rounded-md bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-title"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Orçamento
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      <motion.div className="fixed top-20 left-0 right-0 h-1 bg-accent origin-left z-50" style={{ scaleX }} />
    </>
  );
};

export default Header; 