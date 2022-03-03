import { useState } from "react";

const App8=()=>{
    const [password,setPassword]=useState("");
   
    return <>
    password <input type="password" value={password} onChange={(e)=>setPassword(()=>e.target.value)}/>
    {
        
        password!==""&&(/\d/.test(password)?<p>New password set</p>:<p>password should contain atleast 1 no</p>)
    }
    
    </>
}

export default App8;