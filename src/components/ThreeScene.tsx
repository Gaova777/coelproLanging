import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { HardHat } from 'lucide-react';
import { ErrorBoundary } from './ui/ErrorBoundary';

const Helmet = () => {
  const ref = useRef<THREE.Group>(null!);
  const { scene } = useGLTF('/model/Helmet.glb');

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });

  return (
    <group ref={ref}>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.4}>
        <primitive object={scene} scale={15} position={[0, 0, 0]} />
      </Float>
    </group>
  );
};

const Scene = () => (
  <Canvas camera={{ position: [8, 3.5, 12], fov: 45 }} shadows dpr={[1, 2]}>
    <color attach="background" args={['#0a2e5c']} />
    <fog attach="fog" args={['#0a2e5c', 15, 30]} />
    <ambientLight intensity={0.45} />
    <directionalLight
      position={[6, 8, 6]}
      intensity={1.4}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
    <directionalLight position={[-5, 3, -4]} intensity={0.5} color="#f37021" />
    <Environment preset="studio" />
    <Suspense fallback={null}>
      <Helmet />
    </Suspense>
    <ContactShadows position={[0, -1.6, 0]} opacity={0.45} scale={12} blur={2.6} far={4} />
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.5}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.9}
    />
  </Canvas>
);

const Fallback = () => (
  <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-gradient-navy text-white/80 p-8 text-center">
    <HardHat size={56} className="text-brand-orange" />
    <p className="text-sm">Visualización 3D no disponible en este dispositivo.</p>
  </div>
);

const ThreeScene = () => (
  <div className="relative h-[420px] md:h-full w-full rounded-3xl overflow-hidden shadow-card ring-1 ring-brand-navy/10 bg-brand-navy">
    <ErrorBoundary fallback={<Fallback />}>
      <Scene />
    </ErrorBoundary>
    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[10px] uppercase tracking-[0.2em]">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
      Seguridad primero
    </div>
  </div>
);

useGLTF.preload('/model/Helmet.glb');

export default ThreeScene;
