// import React from "react";
// import ReactDOM from "react-dom";
// import animals,{useAnimals} from "./data"
// console.log(animals);
//destructuring of array
// const [cat,dog]= animals;

// here animal array have two object what the code at line number 5 does it pulled the first item 
// from an array and assign name cat than pulled second item and assign the name dog.  
// console.log(c);
// console.log(d);

//destructuring of object

//syntax generally same only in place of square bracket [] curlly bracket{} is used 
// const{name, sound}= cat;

// In this we can not assign different name to element of Object.

// if we want to assign diffrent name than their is different syntax for this
// const {name:catName, sound:catSound}=cat;

// agar ham name aur sound ko koi aur value assign karna chah rahai hai than Syntax

// const {name="Fluffy",sound="Purr"}=cat;

// const {name, sound, feedinRequirement:{food,water}}=cat;

// console.log(food);
// console.log(water)

// const [AnimalName, AnimalSound]= useAnimals(cat);
// here we are destructuring what ever useAnimals function returning
// console.log(AnimalName); output- cat
// AnimalSound() output - meow




// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"

const[honda,tesla]=cars;



const{speedStats:{topSpeed:hondaTopSpeed}}=honda;
const{speedStats:{topSpeed:teslaTopSpeed}}=tesla;
const{coloursByPopularity:[hondaTopColour]}=honda;
const{coloursByPopularity:[teslaTopColour]}=tesla;



ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
