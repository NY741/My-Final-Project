import { Link } from "react-router-dom";
import React from "react";
import LogoFooter from "./LogoFooter";
import categories from "../data/categories";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <LogoFooter />
      </div>
      <div className="footer-links">
        <div>
          <a href="#" title="politics">
            Politics
          </a>
          <a href="#" title="celebrities">
            Celebrities
          </a>
          <a href="#" title="health">
            Health
          </a>
        </div>

        <div>
          <a href="#" title="youth">
            Youth
          </a>
          <a href="#" title="education">
            Education
          </a>
          <a href="#" title="business">
            Business
          </a>
        </div>

        <div>
          <a href="#" title="culture">
            Culture
          </a>
          <a href="#" title="climate">
            Climate
          </a>
          <a href="#" title="science">
            Science
          </a>
        </div>

        <div>
          <a href="#" title="nature">
            Nature
          </a>
          <a href="#" title="sports">
            Sports
          </a>
          <a href="#" title="music">
            Music
          </a>
        </div>

        <div>
          <a href="#" title="technology">
            Technology
          </a>
          <a href="#" title="fashion">
            Fashion
          </a>
          <a href="#" title="war">
            War
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
