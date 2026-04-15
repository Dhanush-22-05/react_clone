import React, { useContext, useState } from "react";
import { CounterContext } from "./CreateContext";
import Count from "./Count";
export default function Counter(){

    const{count,handleadd}=useContext(CounterContext)
    
    return(
        <div>
            <h1>Counter:{count}</h1>
             <button onClick={handleadd}>ADD</button>
         
        </div>
    )
}