import { useState } from "react";
import React from "react";

function Counter(){
 const [count,setCount] =useState(0);

 let increment = ()=>{
    setCount(count+1);
 }

let decrement = () =>{
    setCount(count-1);
}

let reset =()=>{
    setCount(0);
}


return(
    <div className="counter-Container">
        <h1 className="count-display">Count : {count}</h1>
        <div>
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        </div>
  
    </div>
 );

 }

export default Counter;