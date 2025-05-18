import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePI, triplePI } from "./math" // ees tarike multiple things export karte hai 
//default export ka name change kar sakte hai par doublePI aur TriplePI me name saam rakhna jaruri hai
//har jagah 

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePI()}</li>
    <li>{triplePI()}</li>
  </ul>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
