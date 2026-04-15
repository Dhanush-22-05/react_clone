import React, { useState } from "react";

export default function Kit() {

    const [dt, setdt] = useState(["dhanush", "thrisha", "krishna", "devid"])
    return (
        <div>
            {dt.map((dtt) => (
               <h1>{dtt}</h1>
            ))}
        </div>
    )
}