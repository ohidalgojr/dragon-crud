import React from "react";

import { Menu } from "../../components";
import "./MainContainer.scss";

const MainContainer = ({ children }) => {
  return (
    <div className="main">
      <Menu />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default MainContainer;
