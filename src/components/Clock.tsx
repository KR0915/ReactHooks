import { useEffect, useState } from "react"
//タイマーが呼び出される周期を一秒にする
const UPDATE_CYCLE=1000
//localstorageで使用するキー
const KEY_LOCAL='KEY_LOCAL'

enum Locale{
    US='en-US',
    JP='ja-JP',
}

const getLocaleFromString=(text:string)=>{
    switch(text){
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

export const Clock=()=>{
    const[timestamp,setTimestamp]=useState(new Date())
    const[local,setLocale]=useState(Locale.US)
    //タイマーのセットするための副作用
    useEffect(()=>{
        //タイマーのセット
        const timer=setInterval(()=>{
            setTimestamp(new Date())
        },UPDATE_CYCLE)
        //クリーンアップ関数を渡し、アンマウント時にタイマーの解除をする
        return()=>{
            clearInterval(timer)
        }
        //初期描画のみ実行する
    },[])

    //localstorageから値を読み込むための副作用
    useEffect(()=>{
        const savedLocale=localStorage.getItem(KEY_LOCAL)
        if(savedLocale!==null){
            setLocale(getLocaleFromString(savedLocale))
        }
    },[])
    //localが変化したときにlocalstorageに値を保持するための副作用
    useEffect(()=>{
        localStorage.setItem(KEY_LOCAL,local)
        //依存配列にlocaleを渡し、localeが変化するたびに実行するようにする
    },[local])

    return (
        <div style={{padding:`16px`,backgroundColor:`grey`}}>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleString(local)}</span>
                <select
                value={local}
                onChange={(e)=>setLocale(getLocaleFromString(e.target.value))}>
                    <option value="en-US">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}
