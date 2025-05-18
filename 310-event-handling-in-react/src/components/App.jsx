import React, { useState } from "react";

function App() {

  const[style,setStyle]=useState("light");
 const[isMouseOver,setIsMouseOver]=useState(false);

  function HandleOnMouseOver(){
    // setStyle("dark");
    setIsMouseOver(true);
    
    }

    function Handleonmouseout(){
      // setStyle("light");

      setIsMouseOver(false);
      
      }




  return (
    <div className="container">
      <h1 >Hello</h1>
      <input type="text" placeholder="What's your name?" />

    <button 
    style={{backgroundColor:isMouseOver ? "black":"white"}}
    onMouseOver={HandleOnMouseOver}
    onMouseOut={Handleonmouseout}
    >Submit</button>
      {/* <button className={style} onMouseOver={HandleOnMouseOver} onMouseOut={Handleonmouseout} >Submit</button> */}
      
      
    </div>
  );
}

export default App;
