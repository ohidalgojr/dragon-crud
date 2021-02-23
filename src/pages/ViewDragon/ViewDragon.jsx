import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components";
import api from "../../services/api";
import moment from "moment";

import "./ViewDragon.scss";
import picture from "../../assets/spyro.png";

const ViewDragon = (props) => {
  moment.locale("pt-br");
  const { id } = props.match.params;
  const [dragon, setDragon] = useState();

  useEffect(() => {
    api
      .get(`dragon/${id}`)
      .then((response) => {
        setDragon(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="view">
      <div className="view-content">
        <img src={picture}></img>
        <div>
          <h2>{dragon ? dragon.name : ""}</h2>
          <p>
            <span>Tipo:</span> {dragon ? dragon.type : ""}
          </p>
          <p>
            <span>Criado em: </span>
            {dragon ? moment(dragon.createdAt).format("DD-MM-YYYY") : ""}
          </p>
        </div>
        <NavLink to="/dragons" exact>
          <Button
            className="button-primary"
            type="button"
            placeholder="Ver Todos"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ViewDragon;
