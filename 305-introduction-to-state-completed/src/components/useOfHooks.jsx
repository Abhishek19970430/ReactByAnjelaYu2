import React, { useState } from "react";


function useOfHooks(){

    const[isDone,setIsDone]=useState(false);
    



 function strike(){
  setIsDone(true)
  console.log("Abhishek")
 }

 function notStrike(){
  setIsDone(false);
 }


const strikeThrough={textDecoration:"line-through"};

   return <div><p style={isDone?strikeThrough:null}>Buy Milk</p>
       <button onClick={strike}>Change to strike through</button><br></br>
       <button onClick={notStrike}>Remove strike through</button>
       </div>
}


export default useOfHooks;