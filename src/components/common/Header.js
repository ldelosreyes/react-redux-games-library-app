import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_PAGE, ABOUT_PAGE, GAMES_PAGE } from "../../shared";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to={HOME_PAGE} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to={GAMES_PAGE}>Games</NavLink>
        {" | "}
        <NavLink to={ABOUT_PAGE}>About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
