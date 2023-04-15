import { Link } from "react-router-dom";
import React from "react";
import LogoImage1 from "../images/logo-image-red.png";

const LogoHeader = () => {
  return (
    <div className="logo">
      <Link to=".">
        <img src={LogoImage1} alt="logo" />
      </Link>
    </div>
  );
};

export default LogoHeader;
