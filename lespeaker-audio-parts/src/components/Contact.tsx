"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram } from "lucide-react";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Schema de validação do formulário
const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
  message: yup.string().required("A mensagem não pode estar vazia").min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

// Mapa carregado dinamicamente para evitar erros de SSR
const DynamicMap = dynamic(() => import('./Map'), { ssr: false });

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Aqui seria a lógica de envio do formulário
    console.log(data);
    alert("Mensagem enviada com sucesso! (Simulação)");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-blue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FCFCF7]">Fale Conosco</h2>
          <p className="text-lg text-gray-300 mt-4">
            Tem alguma dúvida ou projeto em mente? Entre em contato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <input {...register("name")} placeholder="Seu nome" className="w-full p-3 bg-dark-blue rounded-lg border border-white/20 focus:ring-2 focus:ring-subtle-red outline-none" />
              {errors.name && <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <input {...register("email")} placeholder="Seu e-mail" className="w-full p-3 bg-dark-blue rounded-lg border border-white/20 focus:ring-2 focus:ring-subtle-red outline-none" />
              {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <textarea {...register("message")} placeholder="Sua mensagem..." rows={5} className="w-full p-3 bg-dark-blue rounded-lg border border-white/20 focus:ring-2 focus:ring-subtle-red outline-none" />
              {errors.message && <p className="text-red-400 mt-1 text-sm">{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full py-3 bg-subtle-red text-[#FCFCF7] font-bold rounded-lg hover:bg-red-600 transition-colors">
              Enviar Mensagem
            </button>
          </motion.form>

          {/* Mapa e Contatos */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-80 w-full rounded-xl overflow-hidden border-2 border-white/10">
              <DynamicMap />
            </div>
            <div className="flex justify-center gap-6">
              {[
                { icon: Phone, href: "https://wa.me/5500000000000" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Mail, href: "mailto:contato@lespeaker.com" }
              ].map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 rounded-full border border-white/20"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255, 76, 76, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  animate={{ y: [0, -4, 0] }}
                >
                  <item.icon className="w-6 h-6 text-[#FCFCF7]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}