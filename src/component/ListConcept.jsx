import React, { useState } from "react";

export default function Listconcept(){
    
     const[array,setarray]=useState(["Dhanush","Thrisha","Nivash","Bhuvi","Vimal","Rithik"])
     const handlearray=(dt)=>{
     setarray.push(dt.target.value)
     }
     const handlearr=(tt)=>{
     setarray.pop()
     }
    return(
        <div>
            <h1>ADD</h1>
            <input type="text" placeholder="Enter Array Element" onChange={handlearray}/>
            <h1>DELETE</h1>
            <input type="number" placeholder="enter index" onChange={handlearr} />
            <h1>{array}</h1>
        </div>
    )
}