import React, { useState } from "react";

import { Button } from "../";

import "./LoginForm.scss";

const LoginForm = (props) => {
  const initialState = { username: "", password: "" };
  const [user, setUser] = useState(initialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    props.onSubmit(user);
    setUser({ username: "", password: "" });
  };

  return (
    <form onSubmit={submit} className="login-form">
      <label>
        Username:
        <input
          type="text"
          name="username"
          alt="Username"
          value={user.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          alt="Password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <Button type="submit" placeholder={"Login"} />
    </form>
  );
};

export default LoginForm;
