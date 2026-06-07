import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SearchMovie() {
   const[data,setdata]=useState([]);
   const[search,setsearch]=useState("");

   const handleget=async()=>{
     try {
    let datas = await axios.get("https://fooapi.com/api/movies");
    setdata(datas.data.data);
  } catch (error) {
    console.log(error);
  }
   }
   useEffect(()=>{
   handleget();
   },[])

   const handlesearch=(e)=>{
  setsearch(e.target.value);
   }
       let filt=data.filter((oo)=>oo.title?.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
        <input type="text" placeholder='Search movie...........' onChange={handlesearch}/>
    {filt.map((dt) => (
                    <div key={dt.id}>
                        <h1>Movie Name : {dt.title}</h1>
                            <img src={dt.poster} alt={dt.title} width={200} height={200} />     
                       </div>
                ))}
    </div>
  )
}
