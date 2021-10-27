import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return <h1>{width}</h1>;
}

export default App;
