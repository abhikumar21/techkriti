
import React, { useMemo, useRef } from 'react'
import vertexShader from '../styles/vert';
import fragmentShader from '../styles/frag';
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";



const Blob3 = () => {
    
    const mesh = useRef();
    const hover = useRef(false);
    const uniforms = useMemo(() => {
      return {
        u_time: { value: 6 },
        u_intensity: { value: 0.7 },
      
      };
    });


    useFrame((state) => {
      const { clock } = state;
      if (mesh.current) {
        mesh.current.material.uniforms.u_time.value =
          0.4 * clock.getElapsedTime();
  
        mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
          mesh.current.material.uniforms.u_intensity.value,
          hover.current ? 1 : 0.15,
          0.02
        );
      }
    });


  return (
    
    
    <mesh
      ref={mesh}
      scale={1.4}
      position={[-12, -4, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
    <icosahedronBufferGeometry args={[2, 40]} />
    <shaderMaterial 
    vertexShader={vertexShader} 
    fragmentShader={fragmentShader} 
    uniforms={uniforms}
    />
    </mesh>
  
  )
}

export default Blob3