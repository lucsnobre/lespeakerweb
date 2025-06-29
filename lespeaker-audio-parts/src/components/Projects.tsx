"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const portfolioImages = [
  { id: 1, src: "/gallery/project-1.jpg", category: "Reparo", title: "Restauração de Receiver Clássico" },
  { id: 2, src: "/gallery/project-2.jpg", category: "Instalação", title: "Home Theater Sob Medida" },
  { id: 3, src: "/gallery/project-3.jpg", category: "Customização", title: "Caixas Acústicas Personalizadas" },
  { id: 4, src: "/gallery/project-4.jpg", category: "Som Automotivo", title: "Sistema de Alta Fidelidade" },
  { id: 5, src: "/gallery/project-5.jpg", category: "Upgrade", title: "Otimização de Amplificador" },
  { id: 6, src: "/gallery/project-6.jpg", category: "Reparo", title: "Manutenção de Toca-Discos" },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-title text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore alguns dos nossos trabalhos, onde a paixão pelo áudio encontra a excelência técnica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image 
                src={image.src} 
                alt={image.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-foreground text-lg font-bold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Imagem ampliada do projeto" 
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
              <motion.button
                className="absolute -top-3 -right-3 bg-card rounded-full p-2 shadow-lg border border-border"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <X className="text-foreground" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 