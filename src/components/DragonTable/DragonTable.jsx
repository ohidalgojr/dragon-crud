import React from "react";
import moment from "moment";

import { Button } from "..";

import "./DragonTable.scss";

const DragonTable = (props) => {
  moment.locale("pt-br");

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Criado Em</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.dragons.map((dragon) => (
          <tr key={dragon.id}>
            <td>{dragon.id}</td>
            <td>{dragon.name}</td>
            <td>{dragon.type}</td>
            <td>{moment(dragon.createdAt).format("DD-MM-YYYY")}</td>
            <td>
              <Button
                className={"button-primary"}
                placeholder={"Edit"}
                onClick={() => props.onEdit(dragon)}
              />
              <Button
                className={"button-dark"}
                placeholder={"Delete"}
                onClick={() => props.onDelete(dragon.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DragonTable;
