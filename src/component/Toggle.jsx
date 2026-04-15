import React, { useState }  from "react";

export default function Toggle(){
const[trig,settrig]=useState("ON")
    const handletrig=()=>{
        settrig(trig === "ON" ? "OFF" : "ON")
    };
   
    return(
        <div className="thri">
            <h1>DARK MODE:{trig}</h1>
            <button onClick={handletrig} className="sd">CHANGE MODE</button>
        </div>
    )
}