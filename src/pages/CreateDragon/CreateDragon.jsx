import React, { useState } from "react";
import api from "../../services/api";
import { NavLink } from "react-router-dom";
import { Button, Alert, DragonForm } from "../../components";
import { IDLE, FINISHED, ERROR } from "../../consts/applicationStatus";
import "./CreateDragon.scss";

const CreateDragon = () => {
  const [dragon, setDragon] = useState();
  const [status, setStatus] = useState(IDLE);

  const handleSubmit = (dragon) => {
    if (!dragon.name || !dragon.type) {
      setStatus(ERROR);
      return;
    }
    api
      .post("dragon", dragon)
      .then((response) => {
        setStatus(FINISHED);
        setDragon(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="create">
      {status === ERROR && (
        <Alert className="error create-alert">
          {"Preencha todos os campos."}
        </Alert>
      )}

      {status === FINISHED && (
        <Alert className="success create-alert">
          {"Dragão criado com Sucesso! Clique em visualizar."}
        </Alert>
      )}

      <div className="create-content">
        <h2>Novo Dragão</h2>
        <DragonForm className="create-form" onSubmit={handleSubmit} />

        <div className="create-actions">
          {dragon && (
            <NavLink to={`/dragon/${dragon.id}`} exact>
              <Button
                className="button-primary"
                type="button"
                placeholder="Visualizar"
              />
            </NavLink>
          )}
          <NavLink to="/dragons" exact>
            <Button
              className="button-dark"
              type="button"
              placeholder="Ver Todos"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CreateDragon;
