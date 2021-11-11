import React from 'react'
import HeaderTech from './Header/HeaderTech'

const Desktop = () => {
    return (
        <div>
            <HeaderTech/>
           <h2> Desktop Development</h2>
           <div className="listContainer">
        <ul className="unordered">
          <li className="listItem">
            <h3>Electron(Javascript)</h3>
          </li>
          <li className="listItem">
            <h3>WPF</h3>
          </li>
          <li className="listItem">
            <h3>UWF</h3>
          </li>
          <li className="listItem">
            <h3>JavaFX</h3>
          </li>
        </ul>
      </div> 
        </div>
    )
}

export default Desktop
