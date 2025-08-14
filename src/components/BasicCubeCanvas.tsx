import { useRef, useEffect } from "react";
import * as THREE from "three"



export default function BasicCubeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()

  const geometry = new THREE.BoxGeometry(1,1,1)
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
  const cube = new THREE.Mesh( geometry, material )
  
  const animate = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  useEffect(() => {
    // we'll fill this in next steps
    renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)
    scene.add(cube)
    camera.position.z = 5

    renderer.setAnimationLoop(animate)
  }, []);

  return (
    <div style={{position:"fixed", inset:0}}>
      <canvas ref={canvasRef} style={{width:"100%", height:"100%", display:"block"}}/>
    </div>
  );
}