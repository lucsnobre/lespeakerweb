"use client";

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const cursorY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const dotX = useSpring(useMotionValue(0), { stiffness: 250, damping: 20 });
  const dotY = useSpring(useMotionValue(0), { stiffness: 250, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cursorX.set(clientX);
      cursorY.set(clientY);
      dotX.set(clientX);
      dotY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}; 