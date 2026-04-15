import React, { useState } from "react";

export default function UserForm() {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [phone, setphone] = useState("")


    const handlename = (e) => {
        setname(e.target.value);
    }

    const handleage = (e) => {
        setage(e.target.value);
    }

    const handlephone = (e) => {
        setphone(e.target.value);
    }

    const [show, setshow] = useState(false)

    const handleshow = () => {
        setshow(true);
    }

    return (

        <div className="ip">
          {!show?<div>
                <input onChange={handlename} placeholder="enter your name:" />
                <br /> <br />
                <input onChange={handleage} placeholder="enter your age:" />
                <br /> <br />
                <input onChange={handlephone} placeholder="enter your phone number:" />
                <br /> <br />

                <button onClick={handleshow}>SUBMIT</button>
            </div>:null}

            {show ? <div>
                <h1>form submitted</h1>
                <h1>NAME:{name}</h1>
                <h1>AGE:{age}</h1>
                <h1>PHONE NUMBER:{phone}</h1>
            </div> : null}

        </div>
    )
}