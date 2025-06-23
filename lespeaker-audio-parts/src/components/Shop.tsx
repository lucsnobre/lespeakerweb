"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const mockProducts = [
  { id: 1, name: "Amplificador Classe A", price: 1200.00, category: "Peças", image: "https://placehold.co/400x400/0D1B2A/FFFFFF?text=Amp" },
  { id: 2, name: "Kit 2 Vias Premium", price: 850.00, category: "Kits", image: "https://placehold.co/400x400/0D1B2A/FFFFFF?text=Kit" },
  { id: 3, name: "Cabo de Força 21mm", price: 150.00, category: "Acessórios", image: "https://placehold.co/400x400/0D1B2A/FFFFFF?text=Cabo" },
  { id: 4, name: "Subwoofer 12' 800W", price: 980.00, category: "Peças", image: "https://placehold.co/400x400/0D1B2A/FFFFFF?text=Sub" },
  { id: 5, name: "Kit Coaxial Simples", price: 350.00, category: "Kits", image: "https://placehold.co/400x400/0D1B2A/FFFFFF?text=Coaxial" },
  { id: 6, name: "Controle Longa Distância", price: 120.00, category: "Acessórios", image: "https://placehold.co/400x400/0D1B2A/FFFFFF?text=Controle" },
];

const categories = ["Todos", "Peças", "Acessórios", "Kits"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const addItemToCart = useCartStore((state) => state.addItem);

  const filteredProducts = selectedCategory === "Todos"
    ? mockProducts
    : mockProducts.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nossa Loja</h2>
          <p className="text-lg text-gray-300 mt-4">
            Os melhores componentes para o seu projeto de som.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-subtle-red text-white"
                  : "bg-light-blue text-gray-300 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="relative group overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
              >
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-subtle-red font-semibold text-lg mt-2">
                    R$ {product.price.toFixed(2)}
                  </p>
                </div>
                <button 
                  onClick={() => addItemToCart(product)}
                  className="absolute bottom-6 right-6 flex items-center justify-center w-12 h-12 bg-subtle-red rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                >
                  <ShoppingCart className="text-white" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 