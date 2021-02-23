import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.placeholder}
    </button>
  );
};

export default Button;
