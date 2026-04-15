import React, { useState } from "react";

export default function Count() {
    const [increase, setincrease] = useState(0)
    const handleadd = () => {
        setincrease(increase + 1)
    }
    const handlereduce = () => {
        setincrease(increase - 1)
    }
    const reset = () => {
        setincrease(0)
    }
    return (
        <div className="dtt">
            <h1 >COUNT:{increase}</h1>
            <button onClick={handleadd} className="dttt">INCREASE</button> <br /> <br />
            <button onClick={handlereduce} className="dttt">DECREASE</button> <br /> <br />
            <button onClick={reset} className="dttt">REST</button>
        </div>
    )
}