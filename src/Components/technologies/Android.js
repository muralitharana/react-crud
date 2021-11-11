import React from "react";
import HeaderTech from "./Header/HeaderTech";
import "./tech.css"

const Android = () => {
  return (
    <div>
      <HeaderTech />
      <h2>Android</h2>
      <div className="listContainer">
        <ul className="unordered">
          <li className="listItem">
            <h3>Java</h3>
          </li>
          <li className="listItem">
            <h3>Kotlin</h3>
          </li>
          <li className="listItem">
            <h3>React Native</h3>
          </li>
          <li className="listItem">
            <h3>Flutter</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Android;
