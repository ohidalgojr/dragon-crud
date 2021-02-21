import React from "react";
import api from "../../services/api";

import { DragonForm } from "../../components";

const CreateDragon = () => {
  const handleSubmit = (dragon) => {
    api
      .post("dragon", dragon)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <DragonForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateDragon;
