// character count
import { useState } from "react"

const App6=()=>{
  const [count,setCount]=useState(0)
  // const [disabled,setDisabled]=useState(false);
  const [text,setText]=useState("")
    return <>
    <input 
    // disabled={disabled?disabled:""}
    value={text}
    maxLength="250"
    onChange={(e)=>{
        const text=e.target.value;
        setText(text)
        const textLength=text.length;
        textLength<=250&&setCount(()=>textLength)
    }}/>
    <p>{count}/250</p>
    </>
}

export default App6;