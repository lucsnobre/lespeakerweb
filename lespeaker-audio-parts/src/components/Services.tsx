"use client";

import { motion } from 'framer-motion';
import { Wrench, Speaker, Car, Package2, Headphones, Hammer } from 'lucide-react';
import { ReactNode } from 'react';

const services: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Wrench size={40} className="text-accent" />,
    title: "Reparo de Equipamentos",
    description: "Diagnóstico preciso e reparo com peças de alta qualidade para receivers, amplificadores e mais."
  },
  {
    icon: <Speaker size={40} className="text-accent" />,
    title: "Instalação Residencial",
    description: "Projetos e instalação de home theaters e som ambiente, com acústica e integração perfeitas."
  },
  {
    icon: <Car size={40} className="text-accent" />,
    title: "Som Automotivo",
    description: "De upgrades a sistemas de competição, garantindo qualidade sonora e acabamento impecável."
  },
  {
    icon: <Package2 size={40} className="text-accent" />,
    title: "Venda de Peças",
    description: "Amplo estoque de componentes originais e de alta performance para garantir o melhor som."
  },
  {
    icon: <Headphones size={40} className="text-accent" />,
    title: "Consultoria Técnica",
    description: "Orientação especializada para a escolha, configuração e otimização do seu sistema de áudio."
  },
  {
    icon: <Hammer size={40} className="text-accent" />,
    title: "Manutenção Preventiva",
    description: "Checagem completa, limpeza e ajustes para manter seu equipamento sempre em perfeitas condições."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Services = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Soluções Completas em Áudio
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Da restauração de clássicos à instalação de sistemas modernos, oferecemos a expertise que seu som merece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative p-8 rounded-lg border border-border bg-card/50
                         transition-all duration-300
                         hover:shadow-[0_0_30px_0_rgba(230,57,70,0.3)] hover:border-accent/50 hover:bg-card"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-4">
                {service.description}
              </p>
              <a href="#" className="font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saiba mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 