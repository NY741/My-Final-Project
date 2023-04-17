import { useState, React } from "react";

const Form = () => {
  const [data, setData] = useState({ username: "", password: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    if (!data.username && !data.password) {
      alert("No data has been provided !");
    } else if (!data.username) {
      alert("You need to provide your username !");
    } else if (!data.password) {
      alert("You need to provide your password !");
    } else {
      alert(`Welcome, ${data.username} !`);
    }
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <form className="login" onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        value={data.username}
        onChange={(e) => handleInputChange(e, "username")}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={data.password}
        onChange={(e) => handleInputChange(e, "password")}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
