"use client";

import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const testimonials = [
  {
    quote: "O som do meu amplificador vintage nunca esteve tão cristalino. Trabalho impecável!",
    name: "Carlos Andrade",
    title: "Músico Profissional",
    image: "/testimonials/user-1.jpg",
  },
  {
    quote: "A instalação do home theater ficou perfeita. A equipe é extremamente profissional e atenciosa.",
    name: "Juliana Martins",
    title: "Cinéfila",
    image: "/testimonials/user-2.jpg",
  },
  {
    quote: "Resolveram um problema no meu sistema de som automotivo que ninguém mais conseguiu. Recomendo!",
    name: "Ricardo Souza",
    title: "Entusiasta de Carros",
    image: "/testimonials/user-3.jpg",
  },
];

const partnerLogos = [
  { name: "Marca Parceira 1", logo: "/partners/logo-1.svg" },
  { name: "Marca Parceira 2", logo: "/partners/logo-2.svg" },
  { name: "Marca Parceira 3", logo: "/partners/logo-3.svg" },
  { name: "Marca Parceira 4", logo: "/partners/logo-4.svg" },
  { name: "Marca Parceira 5", logo: "/partners/logo-5.svg" },
];

const Testimonials = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <section id="depoimentos" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-primary-light text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 dark:text-primary-light/70 max-w-2xl mx-auto">
            A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
          </p>
        </motion.div>

        <div ref={sliderRef} className="keen-slider mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide text-center p-8">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <blockquote className="font-serif text-xl md:text-2xl italic mb-4 dark:text-primary-light text-gray-800">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">Parceiros e Marcas com que Trabalhamos</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {partnerLogos.map((partner, index) => (
                    <Image key={index} src={partner.logo} alt={partner.name} width={120} height={40} className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials; 