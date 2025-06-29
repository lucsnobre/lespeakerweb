"use client";

import { motion } from 'framer-motion';
import { Search, Wrench, Zap, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: <Search size={36} className="text-accent" />,
    title: "Avaliação",
    description: "Análise detalhada para um diagnóstico preciso do seu equipamento.",
  },
  {
    icon: <Wrench size={36} className="text-accent" />,
    title: "Reparo",
    description: "Intervenção técnica com peças de alta qualidade e precisão.",
  },
  {
    icon: <Zap size={36} className="text-accent" />,
    title: "Otimização",
    description: "Ajustes finos para extrair a máxima performance e qualidade sonora.",
  },
  {
    icon: <CheckCircle size={36} className="text-accent" />,
    title: "Entrega",
    description: "Seu equipamento de volta, superando as expectativas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Process = () => {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-gray-50 dark:bg-primary-dark/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-primary-light text-gray-900">
            Nosso Processo
          </h2>
          <p className="text-lg text-gray-600 dark:text-primary-light/70 max-w-2xl mx-auto">
            Da chegada à entrega, cada etapa é executada com o máximo de cuidado e expertise.
          </p>
        </motion.div>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Linha de conexão (visual) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gray-200 dark:bg-gray-700" />
          
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative z-10 text-center p-6 bg-primary-light dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 dark:text-primary-light text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-primary-light/70">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 