import React from "react";
//Titleを渡すためのContextを作成します
const TitleContext=React.createContext('')
//Titleコンポーネントの中でContextの値を参照します
const Title=()=>{
    //Consumerを使ってContextの値を参照します
    return(
        <TitleContext.Consumer>
            {(title)=>{
                return<h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header=()=>{
    return(
        <div>
            <Title />
        </div>
    )
}
//Pageコンポーネントの中でContextに値を渡します
const Page=()=>{
    const title='React Book'
    //Providerを使いContextに値をセットします。
    //Provider以下のコンポーネントから値を参照できます
    return(
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page