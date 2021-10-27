import { useState, useEffect } from "react";
// Usage
export default function App() {

  const [size,setsize] = useState(window.innerWidth)

  
  useEffect(()=>{
  window.addEventListener('resize', () => setsize(window.innerWidth))
  })


  return (
    <div >
      <h1>{size}</h1>
    </div>
  );
}

