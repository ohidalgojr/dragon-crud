import React, { useState, useEffect } from "react";

import api from "../../services/api";
import {
  IDLE,
  FINISHED,
  LOADING,
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

  useEffect(() => {
    handleDragons(dragons);
  }, [dragons]);

  const handleDelete = (dragonId) => {
    api
      .delete(`dragon/${dragonId}`)
      .then(() => {
        const data = dragons.filter((dragon) => dragon.id !== dragonId);
        setDragons(data);
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
        const data = dragons.map((dragon) =>
          dragon.id === updatedDragon.id ? updatedDragon : dragon
        );
        setDragons(data);
        setStatus(FINISHED);
      })
      .catch((error) => console.log(error));
  };

  const handleDragons = (data) => {
    const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
    setDragons(sorted);
  };

  return (
    <>
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
        className={"dragon-table"}
        dragons={dragons}
        onDelete={handleDelete}
        onEdit={handleModal}
      />
    </>
  );
};

export default Dragons;
