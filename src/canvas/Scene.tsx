import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { useEffect, useRef, useState } from "react";
import { generateParticles } from "../utils/particles";
import Sphere from "./Sphere";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Background from "./Background";
import { cube } from "@/const/particleAttributes";

export default function Scene({ particleAttributes, particleShape }) {
  const backgroundRef = useRef();

  useEffect(() => {
    generateParticles(particleAttributes);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {particleAttributes.cube.map((particle) => (
        <Cube
          key={particle.id}
          id={particle.id}
          particleAttributes={particleAttributes}
          particleShape={particleShape}
        />
      ))}

      {particleAttributes.sphere.map((particle) => (
        <Sphere
          key={particle.id}
          id={particle.id}
          particleAttributes={particleAttributes}
          backgroundRef={backgroundRef}
        />
      ))}

      <Background backgroundRef={backgroundRef} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.5} mipmapBlur={true} />
      </EffectComposer>
    </Canvas>
  );
}
