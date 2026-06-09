varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vec3 localPosition = position;
  vec4 modelPosition = modelMatrix * vec4(localPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  
  gl_Position = projectionPosition;

  vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

  vUv = uv;
  vPosition = modelPosition.xyz;
  vNormal = modelNormal.xyz;
}