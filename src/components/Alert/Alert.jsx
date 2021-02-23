import React from "react";
import "./Alert.scss";

const Alert = (props) => {
  return (
    <div className={`alert ${props.className}`}>
      <div className="alert-content">{props.children}</div>
    </div>
  );
};

export default Alert;
