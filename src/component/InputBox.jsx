import React, { useState } from "react";

export default function InputBox() {
    const [Input, setInput] = useState("")
    const handlechange=(d)=>{
        setInput(d.target.value)
    }


    return (
        <div className="ds">
            <h1>INPUT BOX:</h1>
            <input type="text" placeholder="Enter Input"  onChange={handlechange} />
            <h1>OUTPUT DISPLAY: </h1>
            <h1 className="sd"> {Input}</h1>
        </div>
    )
}