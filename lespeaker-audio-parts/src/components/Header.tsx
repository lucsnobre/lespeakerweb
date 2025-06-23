"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Link from 'next/link';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Loja", href: "#shop" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const items = useCartStore((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled ? "rgba(27, 38, 59, 0.8)" : "rgba(27, 38, 59, 0.2)",
      backdropFilter: isScrolled ? "blur(10px)" : "blur(5px)",
      transition: { duration: 0.3 }
    });
  }, [isScrolled, controls]);


  return (
    <motion.header 
      animate={controls}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            Lespeaker
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <div className="relative cursor-pointer">
              <ShoppingCart className="text-white" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-subtle-red text-white text-xs rounded-full">
                  {items.length}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-light-blue/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 