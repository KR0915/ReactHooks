import { useState } from "react"

const Counter=()=>{
    const[count,setCount]=useState(0)
    return(
        <div>
            <h1>useState Test</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
        </div>
    )
}

export default Counter