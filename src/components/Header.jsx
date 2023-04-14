import React from "react";
import LogoHeader from "./LogoHeader";
import Nav from "./Nav";
import NavHidden from "./NavHidden";
import Form from "./Form";

const Header = () => {
  return (
    <>
      <header className="header">
        <LogoHeader />
        <Nav />
        <Form />
      </header>
      <NavHidden />
    </>
  );
};

export default Header;
