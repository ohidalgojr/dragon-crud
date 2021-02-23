import React, { useState } from "react";

import { Button } from "../";
import "./DragonForm.scss";

const DragonForm = (props) => {
  const initialState = props.editing
    ? props.selectedDragon
    : { name: "", type: "" };
  const [dragon, setDragon] = useState(initialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDragon({ ...dragon, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    props.onSubmit(dragon);
    setDragon({ name: "", type: "" });
  };

  return (
    <form onSubmit={submit} className={`form__dragon ${props.className}`}>
      <label>
        Nome
        <input
          type="text"
          name="name"
          alt="Dragon's name"
          value={dragon.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo
        <input
          type="text"
          name="type"
          alt="Dragon's type"
          value={dragon.type}
          onChange={handleChange}
        />
      </label>
      <Button
        className="button-primary"
        type="submit"
        placeholder={props.editing ? "Salvar" : "Cadastrar"}
      />

      {props.editing && (
        <Button
          className="button-secondary"
          type="button"
          placeholder={"Fechar"}
          onClick={props.onCancel}
        />
      )}
    </form>
  );
};

export default DragonForm;
