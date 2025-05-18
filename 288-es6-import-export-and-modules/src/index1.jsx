import React from "react";
import ReactDOM from "react-dom";
import * as PI from "./math1"  //To import Every Thing math1.js

ReactDOM.render(
  <ul>
    <li>{PI.default}</li>
    <li>{PI.doublePI()}</li>
    <li>{PI.triplePI()}</li>
  </ul>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
