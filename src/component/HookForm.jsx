import React from 'react'
import {useForm} from "react-hook-form";
 var Count

export default function HookForm() {
   Count++;
   console.log(Count);
    const {register,handleSubmit}=useForm()
   
    const onsum=(data)=>{
console.log(data,"i am dhanush");
    }

  return (
    <div>
            <h1>react hook from</h1>

            <input {...register("name",{ required: true })} placeholder='enter name' /> <br /> <br />
                <input {...register("age",{ required: true })} placeholder='enter age' />
<br /><br />
      <button onClick={handleSubmit(onsum)}>submit</button>
    </div>
  )
}
