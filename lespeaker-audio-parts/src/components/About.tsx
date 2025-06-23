"use client";

import { motion, Variants } from "framer-motion";

const textVariant = (delay: number): Variants => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay,
    },
  },
});

const imageVariant = (isLeft: boolean): Variants => ({
    hidden: { x: isLeft ? -100 : 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.8,
            ease: "easeOut"
        }
    }
});

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-blue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={textVariant(0)} className="text-4xl md:text-5xl font-bold text-white">
            Nossa História
          </motion.h2>
          <motion.p variants={textVariant(0.2)} className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Mais do que uma loja, somos uma equipe de apaixonados por áudio, dedicados a entregar a melhor experiência sonora possível.
          </motion.p>
        </motion.div>

        {/* Feature 1: Paixão e Técnica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
                className="order-2 lg:order-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h3 variants={textVariant(0.1)} className="text-3xl font-bold text-white mb-4">Paixão e Técnica</motion.h3>
                <motion.p variants={textVariant(0.2)} className="text-gray-300 mb-4">
                    A Lespeaker nasceu da união entre o amor pela música e a obsessão pela perfeição técnica. Cada projeto, seja um simples reparo ou uma instalação complexa, é tratado com o máximo de cuidado e atenção aos detalhes.
                </motion.p>
                <motion.p variants={textVariant(0.3)} className="text-gray-300">
                    Nossa missão é simples: potencializar o seu som. Usamos apenas componentes de alta qualidade e as técnicas mais avançadas para garantir que você ouça cada nota com a clareza e a potência que ela merece.
                </motion.p>
            </motion.div>
            <motion.div 
                className="order-1 lg:order-2 h-80 rounded-xl overflow-hidden shadow-2xl"
                variants={imageVariant(false)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src="https://placehold.co/600x400/0D1B2A/FFFFFF?text=Equipe+na+Oficina" alt="Equipe Lespeaker" className="w-full h-full object-cover"/>
            </motion.div>
        </div>

        {/* Feature 2: Soluções Completas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
                className="h-80 rounded-xl overflow-hidden shadow-2xl"
                variants={imageVariant(true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src="https://placehold.co/600x400/1B263B/FFFFFF?text=Bancada+de+Reparo" alt="Bancada de Reparo" className="w-full h-full object-cover"/>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h3 variants={textVariant(0.1)} className="text-3xl font-bold text-white mb-4">Soluções Completas</motion.h3>
                <motion.p variants={textVariant(0.2)} className="text-gray-300">
                    Do som ambiente da sua casa ao sistema de competição do seu carro, oferecemos uma gama completa de serviços e produtos. Nossa loja conta com um catálogo selecionado de peças e acessórios para todos os tipos de projetos.
                </motion.p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
