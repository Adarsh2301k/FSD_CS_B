import React from 'react'
import { useRef } from 'react';

const Refex = () => {
    const refcount=useRef(0);
    function handleIncrement(){
        refcount.current++;
        if(refcount.current==5){
            alert("Refcount="+refcount.current)
        }
    }
  return (
    <div>
        <h1>useRef</h1>
        <h2>RefCount={refcount.current}</h2>
        <button onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default Refex