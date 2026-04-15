import React, { useState } from "react";

export default function MovieBook({name,price,handlebook}){ // props is an object

     const[dat,setsat]=useState([2,6,4,65,7,87,6,4,5,76,78])

    return(
<div>

    <h1>movie name : {name}   </h1>
    <h2>ticket price : {price} </h2>
    <button onClick={()=>handlebook(dat)}>BOOK</button>
</div>
    )
}