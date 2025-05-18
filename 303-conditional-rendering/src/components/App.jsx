import React from "react";
import Login from "./Login"
var isloggedIn = false;

const d = new Date();
let Hour=d.getHours();
console.log(Hour);
// function renderConditionaly(){
//   if(isloggedIn){
//     return 
//   } else{
//   }
  
// }

function App() {
  return (
    <div className="container">
      {/* {(isloggedIn)?<h1>Hello</h1>: <Login/>} */}

     { Hour>12 && <h1>Why are You Working</h1>}
      </div>
  );
}

export default App;
