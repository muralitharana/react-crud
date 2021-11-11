import React from 'react'
import HeaderTech from './Header/HeaderTech'

const Network = () => {
    return (
        <div>
            <HeaderTech/>
            <h2>Network</h2>
            <div className="listContainer">
        <ul className="unordered">
          <li className="listItem">
            <h3>IOT</h3>
          </li>
          <li className="listItem">
            <h3>Hardware</h3>
          </li>
          <li className="listItem">
            <h3>Linux</h3>
          </li>
          <li className="listItem">
            <h3>Network</h3>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Network
