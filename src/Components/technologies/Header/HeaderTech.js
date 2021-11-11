import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "./HeaderTech.css"
import { Button } from '@mui/material';
import {useHistory} from "react-router-dom"
function HeaderTech(props) {
    const  history = useHistory();
    return (
        <div className="headerTech">
            <Button style={{color:"white"}} onClick={()=>history.push("./Home")}><HomeOutlinedIcon/></Button>
        </div>
    )
}

export default HeaderTech
