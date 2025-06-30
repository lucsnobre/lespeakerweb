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
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fale Conosco</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tem alguma dúvida ou projeto em mente? Entre em contato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 rounded-xl bg-card/40 border border-border"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <input 
                {...register("name")} 
                placeholder="Seu nome" 
                className="w-full p-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none text-foreground placeholder:text-foreground/50" 
              />
              {errors.name && <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <input 
                {...register("email")} 
                placeholder="Seu e-mail" 
                className="w-full p-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none text-foreground placeholder:text-foreground/50" 
              />
              {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <textarea 
                {...register("message")} 
                placeholder="Sua mensagem..." 
                rows={5} 
                className="w-full p-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none text-foreground placeholder:text-foreground/50" 
              />
              {errors.message && <p className="text-red-400 mt-1 text-sm">{errors.message.message}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent-hover transition-colors"
            >
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
            <div className="h-80 w-full rounded-xl overflow-hidden border border-border">
              <DynamicMap />
            </div>
            <div className="flex justify-center gap-6">
              {[
                { icon: Phone, href: "https://wa.me/5500000000000", label: "WhatsApp" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Mail, href: "mailto:contato@lespeaker.com", label: "Email" }
              ].map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card/40 rounded-full border border-border hover:bg-accent/10 hover:border-accent"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={item.label}
                >
                  <item.icon className="w-6 h-6 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}