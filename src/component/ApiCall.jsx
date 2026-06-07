import React, { useEffect, useState } from "react";

export default function ApiCall(){
const[apidata,setapidata]=useState([])

const[count,setcount]=useState(0)


useEffect (()=>{
    handlefetch()
},[count]) //runs one time

    const handlefetch =async()=>{
        let datas=await fetch("https://fakestoreapi.com/products")
        let res=await datas.json()
        console.log("dhanush");
        setapidata(res)
    }

    const handleadd=()=>{
        setcount(count+1)
    }
    return(
        <div>

            <h1>count-{count}</h1>
           <button onClick={handleadd}>add</button>
            {apidata.map((ddtt)=>(
              <div>
                 <h1>{ddtt.title}</h1>
                 <img src={ddtt.image} width={300} height={200}/>
                 <h3>{ddtt.price}</h3>
              </div>  
            ))

            }
        </div>
    )
}