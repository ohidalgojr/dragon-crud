import React, { useState } from "react";

import { MenuItem } from "../../components";
import { ReactComponent as FaBars } from "../../assets/bars.svg";
import "./Menu.scss";

const Menu = () => {
  const [menuClass, setMenuClass] = useState("");

  const handleToggle = () => {
    setMenuClass(menuClass === "" ? "menu-toggled" : "");
  };

  return (
    <div className={`menu ${menuClass}`}>
      <div className="menu-left">
        <MenuItem text="View Dragons" />
        <MenuItem text="Create Dragon" />
      </div>
      <div className="menu-right">
        <MenuItem text="Logout" />
      </div>
      <FaBars onClick={() => handleToggle()} className="menu-icon" />
      <div className="clear-fix" />
    </div>
  );
};

export default Menu;
