
// password checker

import { useState } from "react";

const App2=()=>{
   const [password1,setPassword1]=useState("");
   const [password2,setPassword2]=useState("");
    return <>
    password1 <input onChange={(e)=>{
        setPassword1(()=>e.target.value)
    }} value={password1} type="password"></input>
    password2 <input onChange={(e)=>{
        setPassword2(()=>e.target.value)
    }} value={password2} type="password"></input>
    {
        password1!==password2&&<>Error</>
    }
    </>
}

export default App2;