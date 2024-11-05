// src/components/SolarSystem3D.jsx
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

const SolarSystemModel = () => {
  const { scene, animations } = useGLTF('/public/solar_system.glb'); // Load the GLB model
  const { actions } = useAnimations(animations, scene); // Use animations hook
  useEffect(() => {
    // Play the first animation with a slower time scale
    if (actions && actions[Object.keys(actions)[0]]) {
      const action = actions[Object.keys(actions)[0]];
      action.timeScale = 0.05; // Adjust the time scale to slow down the animation (0.5 is half speed)
      action.play();
    }
  }, [actions]);

  return <primitive object={scene} scale={0.5} />;
};

const SolarSystem3D = () => {
  return (
    <Canvas style={{ height: '600px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <SolarSystemModel />
    </Canvas>
  );
};

export default SolarSystem3D;
