import React from 'react'
import HeaderTech from './Header/HeaderTech'

const Cloud = () => {
    return (
        <div>
            <HeaderTech/>
           <h2> Cloud</h2>
            <div className="listContainer">
        <ul className="unordered">
          <li className="listItem">
            <h3>AWS</h3>
          </li>or
          <li className="listItem">
            <h3>Azure</h3>
          </li>
          <li className="listItem">
            <h3>Linux</h3>
          </li>
          <li className="listItem">
            <h3>Python</h3>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Cloud
