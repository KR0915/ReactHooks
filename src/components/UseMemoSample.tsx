import { useMemo, useState } from "react"

export const UseMemoSample=()=>{
    const[text,setText]=useState('')
    const[items,setItems]=useState<string[]>([])
    const onChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const onClickButton=()=>{
        setItems((prevItems)=>{
            return [...prevItems,text]
        })
        setText('')
    }
    const numberOfCharactors1=items.reduce((sub,item)=>sub+item.length,0)

    const numberOfCharactors2=useMemo(()=>{
    return items.reduce((sub,item)=>sub+item.length,0)
    },[items])

    return(
        <div style={{padding:`16px`,backgroundColor:`green`}}>
            <h1>UseMemoSample</h1>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1:{numberOfCharactors1}</p>
                <p>Total Number of Charactors 2:{numberOfCharactors2}</p>
            </div>
        </div>
    )
}
