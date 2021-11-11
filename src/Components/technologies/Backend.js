import React from 'react'
import HeaderTech from './Header/HeaderTech'
import "./tech.css"
import backend from '../technologies/images/backend.jpg'

const Backend = () => {
    return (
        <>
        <HeaderTech/>
        <div className="techMainContainer">
            <img className="mainImg" src={backend}/>
        </div>
        </>
    )
}

export default Backend
