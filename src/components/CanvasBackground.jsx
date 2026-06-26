import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Points, PointMaterial, Wireframe } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

// Data particles that float around
function ParticleNetwork() {
  const count = 500;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5; // z
    }
    return positions;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.x -= delta * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Glowing Tech Node
function TechNode({ position, color, wireframeColor, scale, speed, invertRotation }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      const dir = invertRotation ? -1 : 1;
      meshRef.current.rotation.x += delta * speed * dir;
      meshRef.current.rotation.y += delta * speed * 1.5 * dir;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial 
          color={color}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          transparent
          opacity={0.3}
        />
        {/* Inner wireframe for tech look */}
        <mesh scale={1.01}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={wireframeColor} wireframe transparent opacity={0.5} />
        </mesh>
      </mesh>
    </Float>
  );
}

// Tech Rings (like a gyroscope or data stream)
function TechRings({ position }) {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children[0].rotation.x += delta * 0.5;
      groupRef.current.children[1].rotation.y += delta * 0.4;
      groupRef.current.children[2].rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Scene() {
  const groupRef = useRef();
  const { scrollYProgress } = useScroll();
  
  // Base rotation for the entire scene based on scroll and mouse
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // 1. Mouse Interaction (subtle tilt)
    const mouseTargetX = (state.pointer.x * Math.PI) / 20;
    const mouseTargetY = (state.pointer.y * Math.PI) / 20;
    
    // 2. Scroll Interaction
    // scrollYProgress is 0 at top, 1 at bottom
    const scrollVal = scrollYProgress.get();
    
    // Animate the main group based on scroll
    // As we scroll down, the scene rotates massively to reveal different angles, and pushes backwards/forwards
    const targetRotX = mouseTargetY + (scrollVal * Math.PI * 1.5);
    const targetRotY = mouseTargetX + (scrollVal * Math.PI * -0.5);
    const targetZ = scrollVal * 8 - 2; // Moves from -2 to +6 on Z axis (creating depth transition)

    // Smooth interpolation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05);
  });

  return (
    <group ref={groupRef}>
      <ParticleNetwork />
      
      {/* Cluster 1: Hero Section */}
      <group position={[0, 0, 0]}>
        <TechNode 
          position={[-3, 2, -2]} 
          color="#1e1b4b" 
          wireframeColor="#4f46e5" 
          scale={1.2} 
          speed={0.2} 
        />
        <TechNode 
          position={[4, -1, 0]} 
          color="#431407" 
          wireframeColor="#f97316" 
          scale={0.8} 
          speed={0.3} 
          invertRotation 
        />
      </group>

      {/* Cluster 2: Appears when scrolling down (Skills/Projects) */}
      <group position={[0, -8, 0]}>
         <TechRings position={[-4, 0, -4]} />
         <TechNode 
          position={[3, 2, -5]} 
          color="#3b0764" 
          wireframeColor="#a855f7" 
          scale={1.5} 
          speed={0.15} 
        />
      </group>

      {/* Cluster 3: Deep scroll (Education/Contact) */}
      <group position={[0, -16, 0]}>
         <TechNode 
          position={[0, 0, -8]} 
          color="#082f49" 
          wireframeColor="#0ea5e9" 
          scale={2.5} 
          speed={0.1} 
        />
      </group>
    </group>
  );
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={1} performance={{ min: 0.5 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
        <Environment preset="city" />
        <Scene />
      </Canvas>
    </div>
  );
}
