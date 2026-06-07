import { colors, useScrollTrigger } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";

export default function Accordion(){

    const[open,setopen]=useState(0);
    
    const handleaccordion=(index)=>{
    setopen(open===index?0:index)
    }
    
    return(
        <div>
            <h1 onClick={()=>handleaccordion(1)}>Personal Details</h1>
            {open===1 && (
            <h1 style={{ color: "blue" }}>NAME : DHANUSH <br />AGE : 21</h1>
        )}
                    <h1 onClick={()=>handleaccordion(2)}>Education</h1>
            {open===2 && (
            <h1 style={{ color: "blue" }}>B.E-ELECTRONICS AND COMMUNICATION ENGINEERING</h1>
        )}
                    <h1 onClick={()=>handleaccordion(3)}>Skils</h1>
            {open===3 && (
            <h1 style={{ color: "blue" }}>HTML,CSS,JAVASCRIPT,REACT,JAVA,SPTRINGBOOT,NODE.JS</h1>
        )}
        </div>
        
    )
}