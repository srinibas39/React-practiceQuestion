import { useState } from "react";
import "./Mode.css"

const Mode=()=>{
    const [mode,setMode]=useState(false)
    return <div>
        <button onClick={(e)=>setMode(()=>!mode)}>{mode?"LIGHT":"DARK"}</button>
        <div className={mode?"dark":"light"} style={{height:"200px",width:"200px"}}>
            <p>I am a paragraph</p>
        </div>
    </div>
}

export default Mode;