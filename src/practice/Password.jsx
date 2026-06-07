import React, { useState } from "react";

export default function Password(){

    const[password,setpassword]=useState("");
    const[strength,setstrength]=useState("");

    const handlepassword=(pa)=>{
    setpassword(pa.target.value);
   let score=0;
    if(password.length>=8){
    score++;
    }
    if(/[A-Z]/.test(password)){
        score++;
    }
    if(/[a-z]/.test(password)){
        score++;
    }
    if(/[0-9]/.test(password)){
        score++;
    }
     if(/[^A-Za-z0-9]/.test(password)){
        score++;
    }
   if(score<=2){
    setstrength("Weak");
   }
   else if(score<=4){
    setstrength("Medium");
   }
   else{
    setstrength("Strong");
   }
    }
  

    return(

        <div>
        <label htmlFor="pass">Enter Your Password</label>
       <input type="password" id="pass" placeholder="enter your password" onChange={handlepassword}/>    
       <h1>Your Password Strength is : {strength}</h1>
        </div>
    )
}