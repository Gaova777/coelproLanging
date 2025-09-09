import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --- COMPONENTE PARA CARGAR EL CASCO ---
const Helmet = (props: any) => {
  const helmetRef = useRef<THREE.Group>(null!);
  
  // Carga el modelo 3D desde la ruta especificada
  const { scene } = useGLTF('/model/Helmet.glb');
  
  // Habilita las sombras en todas las mallas del modelo
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Animación suave de rotación
  useFrame((state) => {
    if (helmetRef.current) {
      helmetRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      helmetRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group ref={helmetRef}>
      <primitive object={scene} {...props} />
    </group>
  );
};

// --- ESCENA PRINCIPAL ENFOCADA EN EL CASCO ---
const HelmetShowcase = () => {
  return (
    <div className="h-96 md:h-full w-full rounded-lg overflow-hidden border border-[#82847C]/50">
      <Canvas camera={{ position: [8, 4, 12], fov: 50 }} shadows>
        {/* Iluminación profesional */}
        <ambientLight intensity={0.4} />
        
        {/* Luz principal */}
        <directionalLight 
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.1}
          shadow-camera-far={20}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        
        {/* Luz de relleno */}
        <directionalLight 
          position={[-3, 2, -2]}
          intensity={0.5}
        />

        {/* Entorno para reflejos realistas */}
        <Environment preset="studio" />

        {/* El casco centrado en la escena */}
        <Suspense fallback={
          /* Indicador de carga simple */
          <mesh>
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial color="#FFFFFF" wireframe />
          </mesh>
        }>
          <Helmet 
            scale={15} 
            position={[0, 0, 0]} 
            rotation={[0, 0, 0]} 
          />
        </Suspense>

        {/* Controles de cámara optimizados para el casco */}
        <OrbitControls 
          enableZoom={true} 
          autoRotate={false}
          minDistance={6}
          maxDistance={20}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default HelmetShowcase;
