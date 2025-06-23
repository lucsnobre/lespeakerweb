"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const portfolioImages = [
  { id: 1, src: "https://placehold.co/600x400/0D1B2A/FFFFFF?text=Antes", category: "Reparo", title: "Receiver Vintage" },
  { id: 2, src: "https://placehold.co/600x400/1B263B/FFFFFF?text=Depois", category: "Reparo", title: "Receiver Vintage" },
  { id: 3, src: "https://placehold.co/600x400/0D1B2A/FFFFFF?text=Antes", category: "Instalação", title: "Som Automotivo" },
  { id: 4, src: "https://placehold.co/600x400/1B263B/FFFFFF?text=Depois", category: "Instalação", title: "Som Automotivo" },
  { id: 5, src: "https://placehold.co/600x400/0D1B2A/FFFFFF?text=Antes", category: "Upgrade", title: "Caixa Acústica" },
  { id: 6, src: "https://placehold.co/600x400/1B263B/FFFFFF?text=Depois", category: "Upgrade", title: "Caixa Acústica" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nossa Galeria</h2>
          <p className="text-lg text-gray-300 mt-4">
            Veja a transformação que podemos fazer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, i) => (
            <motion.div
              key={image.id}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.title}</p>
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative"
            >
              <img src={selectedImage} alt="Imagem ampliada" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
              <motion.button
                className="absolute -top-4 -right-4 bg-white rounded-full p-2"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <X className="text-dark-blue" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 