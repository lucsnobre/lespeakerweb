"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl md:max-w-none"
          >
            <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-foreground">
              Apaixonados por Áudio, Perfeccionistas por Natureza.
            </h2>
            <p className="text-base md:text-lg text-foreground/80 mb-8 md:mb-10 leading-relaxed md:leading-loose">
              Desde 2009, a Lespeaker é o ponto de referência para audiófilos e profissionais. Combinamos técnica artesanal com tecnologia de ponta para restaurar, instalar e otimizar qualquer sistema de som. Nossa missão é simples: garantir que você ouça cada nota com a clareza e a potência que ela merece.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <a 
                href="#contato" 
                className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 font-semibold rounded-md bg-accent text-foreground hover:bg-accent-hover transition-colors duration-300 text-center"
              >
                Fale Conosco
              </a>
              <a 
                href="#processo" 
                className="font-semibold text-foreground/80 hover:text-accent transition-colors md:text-lg"
              >
                Nosso Processo →
              </a>
            </div>
          </motion.div>

          {/* Coluna de Imagem */}
          <motion.div
            className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden group shadow-lg relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/vitrine-produtos.jpg"
              alt="Vitrine com produtos e equipamentos de áudio da LeSpeaker"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
