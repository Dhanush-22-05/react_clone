import React, { useState } from "react";


export default function Calculator(){

  const [num1,setnum1]=useState("");
  const [num2,setnum2]=useState("");
  const [out,setout]=useState(0);

  const handlenum1=(e)=>{
   setnum1(Number(e.target.value))
  };

    const handlenum2=(e)=>{
   setnum2(Number(e.target.value))
  };

  const add=()=>{
    setout(Number(num1+num2));
  }
    const sub=()=>{
        setout(Number(num1-num2));
  }
   const mul=()=>{
    setout(Number(num1*num2));
  }
   const div=()=>{
    setout(Number(num1/num2));
  }

    return(
        <div className="container">
       <label htmlFor="num">Enter first Number</label>
       <input type="number" id="num" placeholder="enter number" onChange={handlenum1}/><br /><br />

              <label htmlFor="num1" >Enter second Number</label>

       <input type="number" id="num1" placeholder="enter number" onChange={handlenum2}/>  <br /><br />
 
       <button onClick={add}>Addition</button> 
       <button onClick={sub}>Subtraction</button> 
              <button onClick={mul}>Mutiplication</button> 
       <button onClick={div}>Divition</button> 
       <br /><br />

       <label htmlFor="out">See Output :{out}</label>
       
        </div>
    );
}