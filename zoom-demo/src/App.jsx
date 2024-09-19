import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [zoom, setZoom] = useState(1);
  const zoomLevelRef = useRef(null);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1));
  };

  useEffect(() => {
    if (zoomLevelRef.current) {
      zoomLevelRef.current.innerText = `Zoom level: ${Math.round(zoom * 100)}%`;
    }
  }, [zoom]);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleZoomIn} style={{ marginRight: "10px" }}>
          Zoom In
        </button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>

      <div
        style={{
          transform: `scale(${zoom})`,
          // transformOrigin: "0 0",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <h1>This is Zoomable Content</h1>
        <p>
          You can zoom in and out using the buttons above. The content scales
          smoothly without affecting the overall layout.
        </p>
      </div>
      <div
        aria-live="polite"
        ref={zoomLevelRef}
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "gray",
        }}
      >
        Zoom level: 100%
      </div>
    </div>
  );
}

export default App;
