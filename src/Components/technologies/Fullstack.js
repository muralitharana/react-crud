import React from 'react'
import HeaderTech from './Header/HeaderTech'
import "./tech.css"


const Fullstack = () => {
    return (
        <div>
            <HeaderTech/>
            <h2>Fullstack Technologies</h2>
            <div className="listContainer">
        <ul className="unordered">
            <h3 style={{textAlign:"center"}}>Frontend</h3>
             <li className="listItem">
            <h3>HTML CSS</h3>
          </li>
          <li className="listItem">
            <h3>Javascript</h3>
          </li>
          <li className="listItem">
            <h3>Reactjs or Angularjs or Vuejs</h3>
          </li>
          <li className="listItem">
            <h3>Bootstrap or Material UI</h3>
          </li>
          <h3 style={{textAlign:"center"}}>Backend</h3>
          <li className="listItem">
            <h3>Java and spring boot</h3>
          </li>or
          <li className="listItem">
            <h3>Javascript(Nodejs) and Express</h3>
          </li>or
          <li className="listItem">
            <h3>Python and Django</h3>
          </li>or
          <li className="listItem">
            <h3>c# and .NET</h3>
          </li>
          <h3 style={{textAlign:"center"}}>DataBase</h3>
          <li className="listItem">
            <h3>MySQL</h3>
          </li>or
          <li className="listItem">
            <h3>Oracle</h3>
          </li>or
          <li className="listItem">
            <h3>MongoDB</h3>
          </li>or
          <li className="listItem">
            <h3>Postgresql</h3>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Fullstack
