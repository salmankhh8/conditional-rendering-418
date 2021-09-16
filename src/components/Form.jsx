import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.Registered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.Registered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
