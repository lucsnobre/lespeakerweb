"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { BoomboxModel } from "./BoomboxModel";
import { Suspense } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-400, 400], [-0.1, 0.1]);
  const rotateY = useTransform(mouseX, [-400, 400], [-0.1, 0.1]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center bg-transparent relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <motion3d.group
              rotateX={rotateX}
              rotateY={rotateY}
            >
              <BoomboxModel />
            </motion3d.group>
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <div className="relative z-10 text-center text-white p-4">
        <motion.h1
          className="text-6xl md:text-8xl font-rajdhani font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LEspeaker
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-poppins"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Qualidade de som para todos os momentos.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero; 