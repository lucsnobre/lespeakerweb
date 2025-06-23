"use client";

import { motion, Variants } from "framer-motion";
import { Wrench, Speaker, ArrowUpCircle } from "lucide-react";
import { useState } from "react";
import type { ElementType } from "react";

interface Service {
  icon: ElementType;
  title: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: "Reparo de Equipamentos",
    description: "Conserto de caixas, amplificadores, receivers e mais.",
    details: "Nossa equipe utiliza peças de alta qualidade para diagnosticar e reparar uma vasta gama de problemas, devolvendo a vida ao seu equipamento de som.",
  },
  {
    icon: Speaker,
    title: "Instalação de Sistemas",
    description: "Soluções de som automotivo e residencial personalizadas.",
    details: "Projetamos e instalamos sistemas de som sob medida, seja para seu carro ou sua casa, garantindo uma acústica perfeita e integrada ao ambiente.",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrade e Acessórios",
    description: "Venda e instalação de peças e acessórios para seu áudio.",
    details: "Oferecemos uma seleção completa de peças, de alto-falantes a cabos, para você que busca o máximo de performance e qualidade sonora.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const ServiceCard = ({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="relative p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className="mb-4"
        animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }}
      >
        <Icon className="w-12 h-12 text-subtle-red" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
      <p className="text-gray-300">{service.description}</p>
      
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="mt-4"
      >
        <p className="text-gray-300">{service.details}</p>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nossos Serviços</h2>
          <p className="text-lg text-gray-300 mt-4">
            Soluções completas para a sua paixão pelo som.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 