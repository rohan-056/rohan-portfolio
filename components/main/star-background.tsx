"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null!);

  // Generate safe star positions (NO maath library)
  const positions = useMemo(() => {
    const count = 4000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 800; // safe range
    }

    return arr;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0003;
      ref.current.rotation.y += 0.0004;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3} args={[]}        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={1.2} />
    </points>
  );
}

export const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 400] }}>
      <Stars />
    </Canvas>
  </div>
);