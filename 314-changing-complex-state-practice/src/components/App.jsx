import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: " ",
    lName: " ",
    email: " ",
  });

  function handleOnChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleOnChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleOnChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleOnChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
