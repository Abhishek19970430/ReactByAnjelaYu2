//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
let result= " ";
const CT=19
let customStyle={
   color:"black"
};


if( CT>0 && CT <12){
     result= "Good Morning";
     customStyle.color="red"
}
else if(CT>12 && CT<18){
    result="Good Afternoon";
    customStyle.color="green"
}
else if(CT>18 && CT<24){
    result="Good Night";
    customStyle.color="blue"
}
ReactDOM.render(



<h1 className="heading" style={customStyle}>{result+CT}</h1>, document.getElementById("root"));