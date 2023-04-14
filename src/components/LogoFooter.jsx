import { Link } from "react-router-dom";
import React from "react";
import LogoImage2 from "../images/logo-image-black-and-white.png";

const LogoFooter = (props) => {
  //   const { logoRed, logoBlackAndWhite } = props;
  return (
    <div className="logo">
      <Link to=".">
        <img src={LogoImage2} alt="logo" />
      </Link>
    </div>
  );
};

export default LogoFooter;
