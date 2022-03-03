// Change the size of the para;

import { useState } from "react"

const App4=()=>{
    const [font,setFont]=useState("2em")
    return <>
    <p style={{fontSize:font}}>I am a complain Girl</p>
    <button onClick={()=>setFont(()=>"6em")}>h1</button>
    <button onClick={()=>setFont(()=>"4em")}>h2</button>
    <button onClick={()=>setFont(()=>"2em")}>h3</button>
    </>
}

export default App4