
export default function Background({ backgroundRef }) {
  return (
    <mesh ref={backgroundRef}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial opacity={0} transparent={true} />
    </mesh>
  )
}