import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// [0,4,1,1,0,2,0,0,1,0,2,1,1,2]->1
// [0, 34, 4, 0, 3, 0, 1, 1, 1, 0, 2, 1, 1, 1]->0
