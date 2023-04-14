import React from "react";
import LogoHeader from "./LogoHeader";
import Nav from "./Nav";
import Form from "./Form";

const Header = () => {
  return (
    <>
      <header className="header">
        <LogoHeader />
        <Nav />
        <Form />
      </header>
      <header className="header-mobile">
        <h2>Fuck you!</h2>
      </header>
    </>
  );
};

export default Header;
