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

  const register = () => {
    props.onRegister(user);
    setUser({ username: "", password: "" });
  };

  return (
    <form onSubmit={submit} className={`form ${props.className}`}>
      <label>
        Usuário
        <input
          type="text"
          name="username"
          alt="Username"
          value={user.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="password"
          alt="Password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <div className="form-action">
        <Button
          className="button-primary"
          type="submit"
          placeholder={"Logar"}
        />
        <hr />
        <Button
          className="button-dark"
          type="button"
          placeholder={"Registrar"}
          onClick={register}
        />
      </div>
    </form>
  );
};

export default LoginForm;
