import { Link } from "react-router-dom";
import React from "react";
import LogoFooter from "./LogoFooter";
import categories from "../data/categories";

const cats = [];
for (let i = 0, len = categories.length; i < len; i += 3) {
  cats.push(
    <div>
      {categories.slice(i, i + 3).map((item, index) => (
        <a href={"/news?category=" + item} title={item} key={index}>
          {item}
        </a>
      ))}
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <LogoFooter />
      </div>
      <div className="footer-links">{cats}</div>
    </footer>
  );
};

export default Footer;
