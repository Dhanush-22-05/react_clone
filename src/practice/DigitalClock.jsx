import React, { useEffect, useState } from "react";


export default function DigitalClock(){

    const [time,settime]=useState(new Date().toLocaleTimeString());
   const[date,setdate]=useState(new Date().toLocaleDateString());
    useEffect(()=>{
    setInterval(()=>{
                settime(new Date().toLocaleTimeString());

    },1000)
    },[])
    useEffect(()=>{
    setInterval(()=>{
    setdate(new Date().toLocaleDateString());
    },86400000)
    },[])
    
    
    return(
        <div className="container">
            <h1>DIGITAL CLOCK</h1>
             <h1>{time}</h1>
             <h1>{date}</h1>
        </div>
    );
}