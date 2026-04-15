import React, { useEffect, useState } from "react";

export default function ApiCalling(){

    const[calling,setcalling]=useState([])

    const handlefetch =async()=>{
        let datas=await fetch("https://fooapi.com/api/movies")
        let res=await datas.json()
        setcalling(res.data ||res);
    }
useEffect(()=>{
    handlefetch();
},[])

    return(
        <div className="main">
            {calling.map((oo)=>(
                <div className="showw" key={oo.id}>
                   <img src={oo.poster} alt="poster" />
                   <h2>{oo.title}</h2>  
                   <p>Rated:{oo.rated}</p>
                   

                </div>
            ))}
        </div>
    )
}