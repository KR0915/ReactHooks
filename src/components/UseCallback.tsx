import React, { useCallback, useState } from "react"

type ButtonProps={
    onClick:()=>void
}
//DecrementButtonは通常の関数をコンポーネントできなくなる
const DecrementButton=(props:ButtonProps)=>{
    const{onClick}=props
    console.log(`DecrementButtonが再描画されました`)

    return <button onClick={onClick}>Decrement</button>
}
//IncrementButtonはメモ化した関数をコンポーネントでボタンを表示する
const IncrementButton=React.memo((props:ButtonProps)=>{
    const{onClick}=props
    console.log(`Incrementが再描画されました`)
    return <button onClick={onClick}>Increment</button>
})
//DoubleButtonはメモ化した関数コンポ-ネントでボタンを表示する
const DoubleButton=React.memo((props:ButtonProps)=>{
    const{onClick}=props
    console.log(`DoubleButtonが再描画されました`)
    return <button onClick={onClick}>Double</button>
})

export const Parent3=()=>{
    const[count,setCount]=useState(0)
    const decrement=()=>{
        setCount((c)=>c-1)
    }
    const increment=()=>{
        setCount((c)=>c+1)
    }
    //useCallbackをつかって関数をメモ化する
    const double=useCallback(()=>{
        setCount((c)=>c*2)
        //第二引数はから配列なのでuseCallbackは常に同じ値を返す
    },[])

    return(
        <div style={{padding:`16px`,backgroundColor:`blue`}}>
            <p>Count:{count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}