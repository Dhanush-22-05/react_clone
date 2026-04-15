import React, { useState } from "react";

export default function HideText() {

    const [hide, sethide] = useState(true)
    const handlehide = () => {
        sethide(!hide)
    };
    return (
        <div className="thri">
            {hide && <h1>DHANUSH</h1>}
            <button onClick={handlehide}>{hide ? "HIDE TEXT" : "SHOW TEXT"}</button>
        </div>
    )
}