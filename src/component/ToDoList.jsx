import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ToDoList(){
    const[list,setlist]=useState("")
    const[show,setshow]=useState([])


const handletodo=(e)=>{
setlist(e.target.value)
}

const handleadd=async()=>{
    let dt={
        task: list
    }
    let data=await axios.post("http://localhost:3000/todoList",dt)
    alert("data save succesfully");
    handleget()
}


const handleget=async()=>{
    let datas=await axios.get("http://localhost:3000/todoList")
    setshow(datas.data)
}


const handledelete=async(id)=>{
let deletedata=await axios.delete("http://localhost:3000/todoList/"+id)
handleget()
}

const handleedit=async(data)=>{
let edited=prompt("edit element",data.task);
let body={
    task:edited
}
let editedata=await axios.put("http://localhost:3000/todoList/"+data.id,body)
handleget()
}


useEffect(()=>{
    handleget()
},[])

    return(
    <div>
        <h1>todolist</h1>
        <label >list :</label>
        <input onChange={handletodo} placeholder="enter u r list"/>
        <button onClick={handleadd}>SUBMIT</button>
        {show.map((dtt)=>(
        <div>
            <h1>{dtt.task}</h1>
            <button onClick={()=>handleedit(dtt)}>Edit</button>
            <button onClick={()=>handledelete(dtt.id)}>Delete</button>
        </div>
        ))}
    </div>
)}