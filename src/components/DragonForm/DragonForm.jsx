import React, { useState } from "react";

import { Button } from "../";

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
    <form onSubmit={submit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          alt="Dragon's name"
          value={dragon.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          alt="Dragon's type"
          value={dragon.type}
          onChange={handleChange}
        />
      </label>
      <Button type="submit" placeholder={props.editing ? "Save" : "Create"} />

      {props.editing && (
        <Button type="button" placeholder={"Close"} onClick={props.onCancel} />
      )}
    </form>
  );
};

export default DragonForm;
