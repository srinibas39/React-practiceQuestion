// password match

import { useState } from "react";

const App7=()=>{
    const [password1,setPassword1]=useState("");
    const [password2,setPassword2]=useState("");
    return <>
    password1<input type="password" value={password1} onChange={(e)=>setPassword1(()=>e.target.value)}/>
    <br/>
    password2<input type="password" value={password2} onChange={(e)=>setPassword2(()=>e.target.value)}/>
    <br/>
    {
        (password1!==""&&password2!=="")&&(password1===password2?"New password set":"password should match")
    }
    </>
}

export default App7;