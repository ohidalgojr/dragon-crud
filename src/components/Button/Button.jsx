import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.placeholder}
    </button>
  );
};

export default Button;
