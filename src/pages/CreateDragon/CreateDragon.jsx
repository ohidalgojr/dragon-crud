import React, { useState } from "react";
import api from "../../services/api";
import { NavLink } from "react-router-dom";
import { Button, Alert } from "../../components";

import { DragonForm } from "../../components";
import "./CreateDragon.scss";

const CreateDragon = () => {
  const [dragon, setDragon] = useState();

  const handleSubmit = (dragon) => {
    if (!dragon.name || !dragon.type) {
      return;
    }
    api
      .post("dragon", dragon)
      .then((response) => setDragon(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="create">
      {dragon && (
        <Alert className="success create-alert">
          {"Dragão Criado com Sucesso! Clique em visualizar."}
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
