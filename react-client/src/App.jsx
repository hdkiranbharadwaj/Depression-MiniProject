import React, { useState } from "react";
import Pred from "./Pred";
import Home from "./Home";
function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <div className="App">
      {isHome ? <Home setIsHome={setIsHome} /> : <Pred />}
    </div>
  );
}

export default App;
