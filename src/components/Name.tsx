import React from 'react';

//名前を入力するためのテキストボックスを返す
const Name=()=>{
    //input要素のonChangeイベントに対するコールバック関数を定義します
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        //入力されたテキストをコンソールに表示します
        console.log(e.target.value)
    }
    return(
        <div style={{padding:`16px`,backgroundColor:`grey`}}>
            <label htmlFor="name">名前</label>
            <input id="name" className="input-name"type="text"onChange={onChange}/>
        </div>
    )
}

export default Name