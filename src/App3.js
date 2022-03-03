import { useState } from "react";


const App3=()=>{
    const [name,setName]=useState("Tanay")
    return <>
     <h2>Hello I am {name}</h2>
     <button onClick={(e)=>{
         setName(()=>e.target.innerText)
     }}>Tanay</button>
     <button onClick={(e)=>{
         setName(()=>e.target.innerText)
     }}>Tanvi</button>
     <button onClick={(e)=>{
         setName(()=>e.target.innerText)
     }}>Swapnil</button>
    </>
}

export default App3;