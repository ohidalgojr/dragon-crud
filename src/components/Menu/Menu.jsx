import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { logout } from "../../services/auth";
import { MenuItem } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import "./Menu.scss";

const Menu = () => {
  const [menuClass, setMenuClass] = useState("");

  const handleToggle = () => {
    setMenuClass(menuClass === "" ? "menu-toggled" : "");
  };

  return (
    <div className={`menu ${menuClass}`}>
      <div className="menu-left">
        <NavLink to="/dragons" exact>
          <MenuItem text="Dragões" />
        </NavLink>
        <NavLink to="/create" exact>
          <MenuItem text="Cadastrar" />
        </NavLink>
      </div>
      <div className="menu-right">
        <NavLink onClick={() => logout()} to="/" exact>
          <MenuItem text="Logout" />
        </NavLink>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => handleToggle()}
        className="menu-icon"
      />
      <div className="clear-fix" />
    </div>
  );
};

export default Menu;
