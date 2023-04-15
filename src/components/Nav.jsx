import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="news">News</NavLink>
      </nav>
    </>
  );
};

export default Nav;
