import { useState } from "react";

import "./styles.css";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
