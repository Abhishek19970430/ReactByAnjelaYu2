import React from "react"

function LoginPage(){
    return (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      );
}

export default LoginPage;