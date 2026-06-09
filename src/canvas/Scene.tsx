import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { useRef } from "react";
import { generateParticles } from "../utils/particles";
import Plane from "./Plane";
import Sphere from "./Sphere";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Background from "./Background";

export default function Scene() {
  const particleAttributesRef = useRef(generateParticles(500, 1));
  const backgroundRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />

      {particleAttributesRef.current.cube.map((particle) => (
        <Cube
          key={particle.id}
          id={particle.id}
          particleAttributes={particleAttributesRef.current}
        />
      ))}

      {particleAttributesRef.current.sphere.map((particle) => (
        <Sphere
          key={particle.id}
          id={particle.id}
          particleAttributes={particleAttributesRef.current}
          backgroundRef={backgroundRef}
        />
      ))}

      <Background backgroundRef={backgroundRef} />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.5}
          mipmapBlur={true} 
        />
      </EffectComposer>
    </Canvas>
  );
}
