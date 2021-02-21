import React from "react";
import "./MenuItem.scss";

const MenuItem = (props) => {
  return <div className="item">{props.text}</div>;
};

export default MenuItem;
