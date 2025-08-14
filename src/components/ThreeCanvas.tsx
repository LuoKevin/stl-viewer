import { useRef, useEffect } from "react";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // we'll fill this in next steps
  }, []);

  return (
    <div style={{position:"fixed", inset:0}}>
      <canvas ref={canvasRef} style={{width:"100%", height:"100%", display:"block"}}/>
    </div>
  );
}