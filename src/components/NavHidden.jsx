import { NavLink } from "react-router-dom";
import React from "react";

const NavHidden = () => {
  return (
    <>
      <nav className="nav-hidden">
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="news">News</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </>
  );
};

export default NavHidden;
