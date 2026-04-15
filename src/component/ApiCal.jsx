import React, { useState } from "react";

export default function ApiCal(){
const[api,setapi]=useState([]);

const handlefetch=async()=>{
    let datas=await fetch("https://fakestoreapi.com/products")
    let res=await datas.json()
    setapi(res);
};

    return(
        <div>
           <button onClick={handlefetch}>CLICK ME</button>
           
            {api.map((at)=>(
                <div className="ip" key={at.id}>
                <h1>Title:{at.title}</h1>
                 <img src={at.image} width={300} height={200}/>
                 <h3>Price:${at.price}</h3>
                 </div>
            ))
            }
        </div>
    );
}