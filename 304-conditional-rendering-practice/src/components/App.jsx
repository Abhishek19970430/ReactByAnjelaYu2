import React from "react";
import Form from "./Form";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form authenticity = {userIsRegistered} />
    </div>
  );
}

export default App;
