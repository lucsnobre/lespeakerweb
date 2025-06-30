"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-title text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Apaixonados por Áudio, Perfeccionistas por Natureza.
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Desde 2009, a Lespeaker é o ponto de referência para audiófilos e profissionais. Combinamos técnica artesanal com tecnologia de ponta para restaurar, instalar e otimizar qualquer sistema de som. Nossa missão é simples: garantir que você ouça cada nota com a clareza e a potência que ela merece.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contato" className="px-6 py-3 font-semibold rounded-md bg-accent text-foreground hover:bg-accent-hover transition-colors duration-300">
                Fale Conosco
              </a>
              <a href="#processo" className="font-semibold text-foreground/80 hover:text-accent transition-colors">
                Nosso Processo →
              </a>
            </div>
          </motion.div>

          {/* Coluna de Imagem */}
          <motion.div
            className="relative w-full h-[600px] rounded-xl overflow-hidden group shadow-2xl shadow-accent/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
            <img
              src="/showcase.jpg"
              alt="Vitrine de produtos e equipamentos de áudio da LeSpeaker"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
