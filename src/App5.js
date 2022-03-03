import { useState } from "react"

const App5=()=>{
    const [count,setCount]=useState(0)
    return <>
     <button onClick={()=>setCount(()=>count+1)}>+</button>
     <p>{count}</p>
     <button onClick={()=>count>0?setCount(()=>count-1):count}>-</button>
    </>
}

export default App5;