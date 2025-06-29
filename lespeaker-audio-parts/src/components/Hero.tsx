"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { RotatingBoombox } from "./RotatingBoombox";

const Hero = () => {
  return (
    <section 
      className="relative h-[98vh] w-full overflow-hidden bg-background"
    >
      <div className="container relative z-10 mx-auto grid h-full grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10 max-w-3xl">
          <div className="reveal-text space-y-6">
            <div className="h-8" />
            <motion.h1
              className="split-text-reveal text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Soluções completas em áudio
            </motion.h1>
            <motion.p
              className="text-balance text-lg text-muted font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Especialistas em reparo e otimização de equipamentos de som, trazendo vida nova ao seu áudio.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="btn btn-primary group relative overflow-hidden rounded-lg px-6 py-3">
                <span className="relative z-10">Conheça nosso trabalho</span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-accent via-accent-hover to-accent bg-[length:200%_100%] transition-all duration-500 ease-out group-hover:bg-[position:100%_0%]"></div>
                <div className="absolute inset-0 z-[5] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
                </div>
              </button>
              <button className="btn btn-outline group relative overflow-hidden">
                <span className="relative z-10 transition-all duration-500 group-hover:text-glow">Entre em contato</span>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="relative aspect-square w-full">
          <div className="absolute inset-0">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 3.5]} fov={50} />
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={0.5} />
              <pointLight position={[-5, -5, -5]} intensity={0.2} />
              <Suspense fallback={null}>
                <RotatingBoombox />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.05),transparent_30%)]"></div>
      </div>
    </section>
  );
};

export default Hero; 