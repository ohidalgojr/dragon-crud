import React from "react";

import { Button } from "..";
import { FINISHED } from "../../consts/applicationStatus";

const DragonTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.dragons.map((dragon) => (
          <tr key={dragon.id}>
            <td>{dragon.id}</td>
            <td>{dragon.name}</td>
            <td>{dragon.type}</td>
            <td>{dragon.createdAt}</td>
            <td>
              <Button
                placeholder={"Edit"}
                onClick={() => props.onEdit(dragon)}
              />
              <Button
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
