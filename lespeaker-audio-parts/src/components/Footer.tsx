"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import Logo from "./Logo";

// Carrega o mapa dinamicamente para evitar problemas com SSR
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-card animate-pulse rounded-lg" />
});

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contato", href: "#contato" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:contato@lespeaker.com" },
  { icon: Phone, href: "tel:+5511999998888" },
];

const Footer = () => {
  return (
    <footer id="contato" className="bg-card/40 border-t border-border/50 backdrop-blur-lg py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Sobre */}
        <div className="flex flex-col items-center md:items-start">
          <Logo />
          <p className="text-sm text-foreground/60 mt-4 max-w-xs">
            Especialistas em reparo, instalação e otimização de áudio com paixão pelo som perfeito.
          </p>
        </div>

        {/* Navegação */}
        <div>
            <h3 className="font-title font-bold text-lg text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
                {navLinks.map(link => (
                    <li key={link.name}>
                        <a href={link.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>

        {/* Contato */}
        <div>
            <h3 className="font-serif font-bold text-lg text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-center justify-center md:justify-start gap-3"><Mail size={16} /><a href="mailto:contato@lespeaker.com" className="hover:text-accent">contato@lespeaker.com</a></li>
                <li className="flex items-center justify-center md:justify-start gap-3"><Phone size={16} /><a href="tel:+5511999998888" className="hover:text-accent">(11) 99999-8888</a></li>
                <li className="flex items-center justify-center md:justify-start gap-3"><MapPin size={16} />Rua Maria de Lourdes Chaluppe, 575 - Jardim Rosemary</li>
            </ul>
        </div>

        {/* Mapa */}
        <div className="h-48 rounded-lg overflow-hidden border border-border">
            <Map />
        </div>

      </div>
      <div className="text-center text-foreground/50 mt-16 border-t border-border/50 pt-8">
        <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                    <social.icon size={20} />
                </a>
            ))}
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} LeSpeaker Audio Parts. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 