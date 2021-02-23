import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import * as auth from "../../services/auth";
import { IDLE, ERROR, FINISHED } from "../../consts/applicationStatus";
import { isInvalidUser, isMockUser } from "./loginUtils";
import { LoginForm, Alert } from "../../components";

import "./Login.scss";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.isAuthenticated()
  );
  const [status, setStatus] = useState(IDLE);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (user) => {
    if (isInvalidUser(user)) {
      setStatus(ERROR);
      setErrorMessage("Preencha todos os campos para continuar.");
      return;
    }
    if (isMockUser(user)) {
      authenticate(user);
    } else {
      setStatus(ERROR);
      setErrorMessage("Verifique suas credenciais ou realize seu cadastro.");
    }
  };

  const handleRegister = (user) => {
    if (isInvalidUser(user)) {
      setStatus(ERROR);
      setErrorMessage("Preencha todos os campos para continuar.");
    } else {
      authenticate(user);
    }
  };

  const authenticate = (user) => {
    auth.login(user);
    setIsAuthenticated(true);
    setStatus(FINISHED);
    setErrorMessage();
  };

  return (
    <div className="login">
      {isAuthenticated && <Redirect to={{ pathname: "/dragons" }} />}
      {status === ERROR && <Alert className="error">{errorMessage}</Alert>}
      <LoginForm
        className="login-form"
        onSubmit={handleSubmit}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default Login;
