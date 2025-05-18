// import React, { useState } from "react";

// function App() {
//   const[fastName,setFastName]=useState();
//   const[lastName,setLastName]=useState();

// function handleOnChange(event){
//   setFastName(event.target.value)
// }

// function handleLOnChange(event){
//   setLastName(event.target.value)
// }

//   return (
//     <div className="container">
//       <h1>Hello {fastName} {lastName}</h1>
//       <form>
//         <input onChange={handleOnChange} name="fName" placeholder="First Name" />
//         <input onChange={handleLOnChange} name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//This is basic solution of our requirement but we can write more compact code by reducing redundancy
//in code. to improve this code we use one useState hooks and one handleOnChange Function

//improve Version of code given below

//******************************Imrove Version***************************************************** */

import React, { useState } from "react";

function App() {
  //here we initialized fullName by an object  so that our fwork done through only one useSate Hook
  const [fullName, setFullName] = useState({
    fName: " ",
    lName: " ",
  });

  function handleOnChange(event) {
    const newValue = event.target.value; // output--what we type in input element
    const inputName = event.target.name; // output -> fname or lName

//**************problem***********
    // if(inputName=="fName"){
    //   setFullName({fName : newValue})
    // }else{
    //   setFullName({lName: newValue})
    // }

// yaha ek problem aa rahi thi jab ham firstName likh kar Last name likhte to firstName Delete ho jata similarly 
//lastName Likh kar firstName likhte to first delete ho jata  esliye for storing previous value of firstName and lastName we use prevValue 
// arrow function inside setFullName function. 
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });

    
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleOnChange}
          name="fName"
          placeholder="First Name"
        />
        <input onChange={handleOnChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
