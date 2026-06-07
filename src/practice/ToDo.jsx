import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ToDo() {
const[data,setdata]=useState([]);
const[product,setproduct]=useState("");

// show data
const handleget=async()=>{
    let datas=await axios.get("http://localhost:3000/products");
    setdata(datas.data);
};


// push data into list
const handlead=(e)=>{
setproduct(e.target.value); 
} 


const handleadd=async()=>{
    let dt={
     product:product
    }
    let datas=await axios.post("http://localhost:3000/products",dt);
    alert("product saved succesfully");
    handleget();
}

// Delete products...

const handledelete=async(id)=>{
  let datas=await axios.delete("http://localhost:3000/products/"+id);
  alert("pruduct deleted succesfully");
  handleget();;
}
// update dpruduct .........
const handleedit=async(item)=>{
  let edited=prompt("enter updated prodect",item.product);
  let edit={
    product:edited
  }
  let editdatas=await axios.put("http://localhost:3000/products/"+item.id,edit);
  handleget();
}

useEffect(()=>{
    handleget()
},[])

  return (
    <div className='container'>
        <label htmlFor="post">Add New Product</label> <br /><br />
        <input type="text" placeholder='enter product' onChange={handlead}/>
        <button onClick={handleadd}>Submit</button>
      <div>
        {data.map((item)=>(
          <div>
            <h1>product : {item.product}</h1>
            <button onClick={()=>handledelete(item.id)}>Delete</button>
            <button onClick={()=>handleedit(item)}>Edit</button>
          </div>
        ))}
      </div>
      
    </div>
  )
}
