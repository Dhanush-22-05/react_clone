import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function WeatherApp() {

  const[data,setdata]=useState([]);
  const[search,setsearch]=useState("");

  const handleget=async()=>{
   let datas=await axios.get("http://localhost:3000/weather");
    setdata(datas.data);
  }
  useEffect(()=>{
    handleget();
  },[])
  
  const handlesearch=(e)=>{
    setsearch(e.target.value)
  }
  let filt=data.filter((oo) => oo.city.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input style={{
    position: "sticky",
    top: "0",
    padding: "10px",
    width: "300px"
  }} type="text" id='it' placeholder='search.............' onChange={handlesearch}/>
      <div>
     {filt.map((item)=>(<div>
      <h1>city : {item.city}</h1>
      <h1>state : {item.state}</h1>
      <h1>temperature : {item.temperature}</h1>
      <h1>humidity : {item.humidity}</h1>
      <h1>windSpeed : {item.windSpeed}</h1>
       <h1>condition : {item.condition}</h1>
     </div>))}
      </div>
    </div>
  )
}
