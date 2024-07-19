import React,{useState} from "react";
function Counter(){

    const[count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count +1);
    }

    const Decrement=()=>{
        setCount(count-1);
    }


    const Reset=()=>{
        setCount(0);
    }
    return(<>
    <div className="container">
        <h1 id="count">{count}</h1>
        <button id="btn1" onClick={Decrement}>Decrement</button>
        <button id="btn2" onClick={Reset}>Reset</button>
        <button id="btn3" onClick={Increment}>Increment</button>
        </div>
        </>
    )

}

export default Counter;