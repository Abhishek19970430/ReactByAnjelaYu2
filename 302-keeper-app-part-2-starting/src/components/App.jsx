import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

(Message)=>{

}

function App() {
  return (
    <div>
      <Header />
     
     { notes.map((Message)=>{
      return(
      <Note
      title= {Message.title}
      content={Message.content}
      />
      )
     
     })}
    
 

      <Footer />
    </div>
  );
}

export default App;
