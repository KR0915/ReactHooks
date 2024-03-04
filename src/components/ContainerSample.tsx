import React from "react";
//Containerのpropsの肩を定義します
type ContainerProps={
    title:string
    children:React.ReactNode
}

//Containerは赤背景のボックスの中にタイトルと子要素を表示します
const Container=(props:{title:string;children:React.ReactElement})=>{
    const{title,children}=props

    return(
        <div style={{background:'red'}}>
            <span>{title}</span>
            {/*propsのchildrenを埋め込むと、コンポーネントの開始タグと閉じタグで囲んだ要素を表示します*/}
            <div>{children}</div>
        </div>
    )
}

const Parent=():JSX.Element=>{
    return(
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent