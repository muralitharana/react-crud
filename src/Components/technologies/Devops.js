import React from 'react'
import HeaderTech from './Header/HeaderTech'

const Devops = () => {
    return (
        <div>
            <HeaderTech/>
            <h2>Devops</h2>
            <div className="listContainer">
        <ul className="unordered">
          <li className="listItem">
            <h3>Docker</h3>
          </li>
          <li className="listItem">
            <h3>Jenkins</h3>
          </li>
          <li className="listItem">
            <h3>GIT</h3>
          </li>
          <li className="listItem">
            <h3>Anisible</h3>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Devops
