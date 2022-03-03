
// Show password

import { useState } from "react";

const App10=()=>{
    const[password,setPassword]=useState("");
    const[buttonClicked,setButtonClicked]=useState(false);
    
    return <>
    <input value={password} onChange={(e)=>setPassword(()=>e.target.value)} type="password"/>
    <button onClick={(e)=>setButtonClicked(!buttonClicked)}>{
        buttonClicked?"Hide password":"show password"
    }</button>
    {buttonClicked?<p>{password}</p>:""}
    </>
}

export default App10;