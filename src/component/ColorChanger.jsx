import React, { useState } from "react";

export default function ColorChanger(){
const[color,setcolor]=useState("red")
const handlecolor=()=>{
    setcolor(color==="red"?"blue":"red")
}
    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{color:color}}>DHANUSH</h1>
            <button onClick={handlecolor}>CLICK ME</button>
        </div>
    )
}