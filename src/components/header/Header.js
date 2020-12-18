import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Abraham / Imagenes </h1>
      <h5>
        Portafolio de Imagenes Desarrollada con / Html, Css, Javascript y
        ReactJs.
      </h5>
      <div className="header_social">
        <a href="https://twitter.com/tupaginaenlinea" target="blank">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1384/1384017.svg"
            alt="social"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
