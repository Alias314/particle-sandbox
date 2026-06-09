import planeVertexShader from '../shaders/plane/planeVertexShader.glsl';
import planeFragmentShader from '../shaders/plane/planeFragmentShader.glsl';

export default function Plane() {
  return (
    <mesh>
      <planeGeometry />
      <shaderMaterial 
        vertexShader={planeVertexShader}
        fragmentShader={planeFragmentShader}
      />
    </mesh>
  )
}