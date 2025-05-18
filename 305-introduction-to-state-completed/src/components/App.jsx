// import React from "react";

//Declarative Programming Approch
// function App(){

// var isDone= false;

// const strikeThrough={textDecoration:"line-through"};

//    return <p style={isDone?strikeThrough:null}>Buy Milk</p>;// Here User interface depend on value of state variable this type of programming are called declarative programming
// // here state variable is isDone if isDone == true than than line-through style is apply else not apply  
// }

// export default App;


//******************imperitive Approch********************** */


// function strike(){
//   document.getElementById("root").style.textDecoration="line-Through";
// }


// function notStrike(){
//   document.getElementById("root").style.textDecoration=null;
  
// }
// function App(){

//   return(
//     <div>
//        <p>Buy milk</p>
//        <button onClick={strike}>Change to strike through</button><br></br>
//        <button onClick={notStrike}>Remove strike through</button>

//     </div>


//   )

// }
// export default App;




//************************Use of Hooks******************************************* */

import React, { useState } from "react";



function App(){

    const[isDone,setIsDone]=useState(false);

 function strike(){
  setIsDone(true)
  console.log("Abhishek")
 }

 function notStrike(){
  setIsDone(false)
 }


const strikeThrough={textDecoration:"line-through"};

   return <div><p style={isDone?strikeThrough:null}>Buy Milk</p>
       <button onClick={strike}>Change to strike through</button><br></br>
       <button onClick={notStrike}>Remove strike through</button>
       </div>
}


export default App;
// function strike(){
//   
// }


// function notStrike(){
//   document.getElementById("root").style.textDecoration=null;
  
// }
// function App(){

//   return(
//     <div>
//        <p>Buy milk</p>
//        <button onClick={strike}>Change to strike through</button><br></br>
//        <button onClick={notStrike}>Remove strike through</button>

//     </div>


//   )

// }
// export default App;















 
// function strike() {
//   document.querySelector("root").style=
//   isDone = true;
// }

// function unStrike() {
//   isDone = false;
// }

// function App() {
//   return (
//     <div>
//       <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//       <button onClick={strike}>Change to strike through</button>
//       <button onClick={unStrike}>Change back</button>
//     </div>
//   );
// }


