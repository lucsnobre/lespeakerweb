import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BoomboxModel } from './BoomboxModel';
import * as THREE from 'three';

export const RotatingBoombox = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (2 * Math.PI) / 15; // Completa 1 volta a cada 15s
    }
  });

  return (
    <group ref={groupRef} scale={[1.8, 1.8, 1.8]}>
      <BoomboxModel />
    </group>
  );
}; 