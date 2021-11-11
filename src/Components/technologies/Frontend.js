import React from "react";
import HeaderTech from "./Header/HeaderTech";
import "./tech.css";
import html from "../technologies/images/html.jpg";
import css from "../technologies/images/css.jpg";
import Javascript from "../technologies/images/javascript.png";
import react from "../technologies/images/react.png";
import angular from "../technologies/images/angular.webp"
import bootstrap from "../technologies/images/bootstrap.jpg";
const Frontend = () => {
  return (
    <>
      <HeaderTech />
      <div className="techContainer">
        <div className="techItems">
          HTML
          <br />
          <img className="Image" src={html} />
        </div>
        <div className="techItems">
          CSS
          <br />
          <img className="Image" src={css} />
        </div>
        <div className="techItems">
          Javascript
          <br />
          <img className="Image" src={Javascript} />
        </div>
        <div className="techItems">React
        <br />
          <img className="Image" src={react} /></div>
        <div className="techItems">Angular <br />
          <img className="Image" src={angular} /></div>
        <div className="techItems">Bootstrap<br />
          <img className="Image" src={bootstrap} /></div>
      </div>
    </>
  );
};

export default Frontend;
