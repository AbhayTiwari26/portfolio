import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  label: string;
  onClick: () => void;
  color?: string;
  textColor?: string;
  hasRing?: boolean;
  distort?: boolean;
}

export const FloatingItem = ({ position, label, onClick, color = '#6b21a8', textColor = '#ffffff', hasRing = false, distort = false }: PlanetProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.005;
      coreRef.current.rotation.x += 0.002;
    }
    
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= 0.003;
      atmosphereRef.current.rotation.z += 0.002;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
      ringRef.current.rotation.x = Math.PI / 2.5; // Tilted ring
    }
    
    if (groupRef.current) {
      const targetScale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={hovered ? 0 : 1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group 
        ref={groupRef}
        position={position}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'none';
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        {/* Core Planet */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.8, 32, 32]} />
          {distort ? (
            <MeshDistortMaterial 
              color={hovered ? '#06b6d4' : color} 
              envMapIntensity={1} 
              clearcoat={1} 
              clearcoatRoughness={0.1}
              metalness={0.6}
              roughness={0.2}
              distort={hovered ? 0.4 : 0.2}
              speed={2}
            />
          ) : (
            <meshStandardMaterial 
              color={hovered ? '#06b6d4' : color} 
              roughness={0.3}
              metalness={0.8}
            />
          )}
        </mesh>

        {/* Atmosphere / Wireframe Overlay */}
        <mesh ref={atmosphereRef}>
          <sphereGeometry args={[0.85, 16, 16]} />
          <meshBasicMaterial 
            color="#ffffff" 
            wireframe 
            transparent 
            opacity={hovered ? 0.3 : 0.05} 
          />
        </mesh>

        {/* Optional Ring */}
        {hasRing && (
          <mesh ref={ringRef}>
            <torusGeometry args={[1.4, 0.02, 16, 100]} />
            <meshStandardMaterial color={hovered ? '#06b6d4' : color} emissive={color} emissiveIntensity={0.5} />
          </mesh>
        )}
        
        {/* Glowing Halo around Planet */}
        <mesh>
          <sphereGeometry args={[1.0, 32, 32]} />
          <meshBasicMaterial 
            color={hovered ? '#06b6d4' : color} 
            transparent 
            opacity={hovered ? 0.15 : 0.05} 
            side={THREE.BackSide}
          />
        </mesh>

        {/* Label */}
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.35}
          color={hovered ? '#06b6d4' : textColor}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.015}
          outlineColor={textColor === '#1e293b' ? '#ffffff' : '#000000'}
        >
          {label}
        </Text>
      </group>
    </Float>
  );
};
