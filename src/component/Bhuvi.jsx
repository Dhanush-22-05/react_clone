import React, { useState } from "react";
let ww = [{ name: "Dhanush", no: 15 },
{ name: "Rohith", no: 45 },
{ name: "Virat", no: 18 },
{ name: "Hardick", no: 33 },
{ name: "klrahul", no: 1 },
{ name: "Raina", no: 3 }]



export default function Bhuvi() {
const [get, setget] = useState(ww)
    return (
        <div>
            {get.map((ss) => (
                <div>
                    <h1>name:{ss.name}</h1>
                    <h2>no:{ss.no}</h2>
                    </div>

    ))}

                </div>
            )
}