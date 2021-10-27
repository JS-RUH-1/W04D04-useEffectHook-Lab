import './App.css';
import { useState, useEffect } from "react";

function App() {
  const size = useWindowSize();


  function useWindowSize() {
    
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

//------------------------
  return (
    <div className="App">
          <h1>  {size.width}px </h1>

    </div>
  );
}

export default App;

