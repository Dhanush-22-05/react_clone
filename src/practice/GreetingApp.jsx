import React, { useEffect, useState } from 'react'

export default function GreetingApp() {

    const[hour,sethour]=useState(new Date().getHours());
    const[time,settime]=useState(new Date().toLocaleTimeString());
    let greeting="";

    if(hour>=5 && hour<12){
        greeting="Good Morning";
    }
    else if(hour >= 12 && hour < 17){
        greeting="Good Afternoon";

    }
       else if(hour >= 17 && hour < 21){
        greeting="Good Evening";

    }
       else{
        greeting="Good Night";

    }
    useEffect(()=>{
    setInterval(()=>{
    settime(new Date().toLocaleTimeString());
    },1000)
    },[])

    useEffect(()=>{
       setInterval(()=>{
     sethour(new Date().getHours())
       },3600) 
    },[])
  return (
    <div className="container">
      <h1>{greeting}</h1>
      <h1>Current time is : {time}</h1>
    </div>
  )
}
   