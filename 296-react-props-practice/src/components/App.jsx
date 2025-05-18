import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name={contacts[0].name}
      image={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
         />
         <Card 
      name={contacts[1].name}
      image={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
         />
         <Card 
      name={contacts[2].name}
      image={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
         />
      
    </div>
  );
}

export default App;

// es react-props Practice 296 me hamne cards ke different html element pe alag alag CSS class lagai 
// fir hamne <Card/> component banaya sath hi use resable card component banaya props ki madad se 
//us card component ko hame App.jsx me import kar liya , sath hi contact.js (constant array of object) ko bhi App.jsx me import kar liya 
// fir contact.js me se sare user ki info app.js me import hui fir app.jsx me se Card component ko sent kar diya  Card component ne ose props object me receive kiya fir use sahi jagah use kiya props.name  