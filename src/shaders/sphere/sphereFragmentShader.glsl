varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  float fresnel = dot(viewDirection, vNormal) + 0.3;

  vec3 color = vec3(1.0) * 15.0;
  gl_FragColor = vec4(color, fresnel);
}