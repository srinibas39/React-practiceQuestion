import { useEffect, useState } from "react";



const DeleteTodos=({ele,tasks,setTasks})=>{
    const handleClick=()=>{
        const filterArr=tasks.filter((el)=>{
             return el!==ele
         })
         setTasks(()=>filterArr)
     }
    return  <button onClick={()=>handleClick()}>delete</button>
}

const Todos = ({el,tasks,setTasks}) => {
    const [strike,setStrike]=useState(false);
  
    return <div>
        <p style={{textDecoration:strike?"line-through":""}} onClick={()=>{setStrike(()=>!strike)}}>{el}</p>
        <DeleteTodos ele={el} tasks={tasks} setTasks={setTasks}/>
    </div>
}

const Todo = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    console.log(tasks);

    useEffect(()=>{
       setText(()=>"")
    },[tasks])
    return <>
        <div>
            <input value={text} onChange={(e) => setText(() => e.target.value)} type={"text"} placeholder={"search"} />
            <button onClick={() => setTasks([...tasks, text])}>ADD</button>
            <div>{
                tasks.map((el, idx) => {
                    return <Todos key={idx} el={el} tasks={tasks} setTasks={setTasks}/>
                })
            }
            </div>
        </div>
    </>
}

export default Todo;