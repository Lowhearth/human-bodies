import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Bounds, BakeShadows } from "@react-three/drei";
import Model from './Model'
import Hasmter from '../models/Scene'
const deg2rad = degrees => degrees * (Math.PI / 180);



export default function App() {
  return (
    <Canvas
      shadows
     
      camera={{ position: [50, 50, 50], zoom: 5, }}
    >
      <color attach="background" args={["#252530"]} />
      <ambientLight intensity={0.01} />
      <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" />
      <spotLight
        castShadow
        color="orange"
        intensity={2}
        position={[-50, 50, 40]}
        angle={0.25}
        penumbra={1}
        shadow-mapSize={[128, 128]}
        shadow-bias={0.00005}
      />
      <Suspense fallback={null}>
      <Hasmter  position={[0,-4,0]} scale={10 }></Hasmter>
      </Suspense>
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
    
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <gridHelper
        args={[1000, 200, "#151515", "#020202"]}
        position={[0, -4, 0]}
      />
      <mesh
        scale={200}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4, 0]}
        receiveShadow
      >
        <planeGeometry />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
      
    </Canvas>
  );
}
