import { useReducer } from "react"
//reducerが受け取るactionの形を定義する
type Action='DECREMENT'|'INCREMENT'|'DOUBLE'|'RESET'
//reducerが受け取るactionにもとづいて次の状態を返します
const reducer=(currentCount:number,action:Action)=>{
    switch(action){
        case 'INCREMENT':
            return currentCount+1
        case 'DECREMENT':
            return currentCount-1
        case 'DOUBLE':
            return currentCount*2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}
const Counter2=()=>{
    const[count,dispatch]=useReducer(reducer,0)

    return(
        <div>
            <h1>useReducer Test</h1>
            <p>Count:{count}</p>
            <button onClick={()=>dispatch('DECREMENT')}>-</button>
            <button onClick={()=>dispatch('INCREMENT')}>+</button>
            <button onClick={()=>dispatch('DOUBLE')}>x2</button>
            <button onClick={()=>dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Counter2