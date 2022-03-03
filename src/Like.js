import { useEffect, useState } from "react"


const LikeList = ({ el }) => {

    const [like, setLike] = useState(false)

    return <li><span>{el}</span>
        <button style={like ? { backgroundColor: "pink", color: "red" } : { backgroundColor: "white", color: "black" }} onClick={() => setLike(!like)}>{like ? "unlike" : "like"}</button></li>
}
const Like = () => {
    
    const [list, setList] = useState(["list 1", "list 2", "list 3", "list 4", "list 5", "list 6"]);
    const [text,setText]=useState("")
    useEffect(()=>{
        setText("")
      },[list]);
    return <>
         <input type="text" value={text} onChange={(e)=>setText(()=>e.target.value)}/>
         <button onClick={()=>setList(()=>[...list,text])}>Add</button>
        <ul>

            {
                list.map((el, idx) => {
                    return <LikeList key={idx} el={el} />
                })
            }

        </ul>
    </>
}


export default Like;
