
void main() {
  vec3 localPosition = position;
  
  vec4 modelPosition = modelMatrix * vec4(localPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
}