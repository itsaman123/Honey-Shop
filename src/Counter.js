import React from 'react'
import { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0);
    return (
      <>
      <h1 className="text-3xl font-bold underline">
     Simple counter App
    </h1>
      <h1>{count}</h1> 

       
      <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 btn" onClick={()=>setCount(count+1)}>
        + </button>  
      <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 btn" onClick={()=>setCount(count-1)}> - </button>  
      <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 btn" onClick={()=>setCount(0)}>Reset</button>  
      


      
      
      </>
    );
}

export default Counter