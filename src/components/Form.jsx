import React from "react";

const Form = () => {
  return (
    <form className="login">
      <label for="login">Login:</label>
      <input type="text" value="login" />
      <label for="password">Password:</label>
      <input type="password" value="password" />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
