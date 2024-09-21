import { useState } from "react";
import "./App.css";
import ColorPanel from "./components/ColorPanel";
import { colorsArray } from "./assets/constants";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen relative flex items-end"
    >
      <ColorPanel colorsArray={colorsArray} setColor={setColor} />
    </div>
  );
}

export default App;
