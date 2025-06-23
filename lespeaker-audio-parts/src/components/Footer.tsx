"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Loja", href: "#shop" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
];

const socialLinks = [
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Youtube, href: "https://youtube.com" },
]

export default function Footer() {
  return (
    <footer className="bg-dark-blue border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-3xl font-bold text-white mb-2" style={{ textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0077ff, 0 0 20px #0077ff, 0 0 25px #0077ff, 0 0 30px #0077ff, 0 0 35px #0077ff' }}>
            Lespeaker
          </Link>
          <p className="text-gray-400">Potencialize seu som.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
                {navLinks.map(link => (
                    <li key={link.name}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-lg text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <motion.a 
                            key={index} 
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.1 }}
                            className="text-gray-400 hover:text-subtle-red transition-colors"
                        >
                            <Icon size={24} />
                        </motion.a>
                    )
                })}
            </div>
        </div>

      </div>
      <div className="text-center text-gray-500 mt-12 border-t border-white/10 pt-8">
        <p>&copy; {new Date().getFullYear()} Lespeaker Áudio Part's. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
} 