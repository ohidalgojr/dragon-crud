import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

import * as auth from "../../services/auth";

import { LoginForm } from "../../components";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.getUser() !== null
  );

  const handleSubmit = (user) => {
    const { username, password } = user;
    auth.login(user);
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated && <Redirect to={{ pathname: "/" }} />}
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
