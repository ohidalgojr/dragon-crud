import React, { useState, useEffect } from "react";

import api from "../../services/api";
import {
  IDLE,
  FINISHED,
  LOADING,
  ERROR,
  EDITING,
} from "../../consts/applicationStatus";
import { DragonTable, Modal, DragonForm } from "../../components";

const Dragons = () => {
  const [dragons, setDragons] = useState([]);
  const [selectedDragon, setSelectedDragon] = useState();
  const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    api
      .get("dragon")
      .then(setStatus(LOADING))
      .then((response) => {
        setDragons(response.data);
        setStatus(FINISHED);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (dragonId) => {
    api
      .delete(`dragon/${dragonId}`)
      .then(() => {
        setDragons(dragons.filter((dragon) => dragon.id !== dragonId));
      })
      .catch((error) => console.log(error));
  };

  const handleModal = (dragon) => {
    setSelectedDragon(dragon);
    setStatus(EDITING);
  };

  const handleEdit = (updatedDragon) => {
    const { id } = updatedDragon;
    api
      .put(`dragon/${id}`, updatedDragon)
      .then(() => {
        setDragons(
          dragons.map((dragon) =>
            dragon.id === updatedDragon.id ? updatedDragon : dragon
          )
        );
        setStatus(FINISHED);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {status === EDITING && (
        <Modal>
          <DragonForm
            editing={true}
            selectedDragon={selectedDragon}
            onSubmit={handleEdit}
            onCancel={() => setStatus(FINISHED)}
          />
        </Modal>
      )}

      <DragonTable
        dragons={dragons}
        onDelete={handleDelete}
        onEdit={handleModal}
      />
    </div>
  );
};

export default Dragons;
