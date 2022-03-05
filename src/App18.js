import { useState } from "react"

const Form=()=>{
    const [text,setText]=useState("Hello")
    return <>
     <input onChange={(e)=>setText(e.target.value)} type="text"/>
     <p>{text}</p>
    </>
}
const App18=()=>{
    const [key,setKey]=useState(1)

    return <>
    <button onClick={()=>setKey((key)=>key+1)}>Reset</button>
    <Form key={key}/>
    
    </>
}

export default App18;