import { useEffect, useState } from "react";


const Delete = ({el,setTasks}) => {
    return <button
        onClick={() =>
            setTasks((prev) => {
                const newTasks = [...prev];
                const filterArr = newTasks.filter((ele) => {
                    return ele !== el
                })
                return filterArr
            })}>Delete</button>
}


const Task = ({ el, setTasks, tasks }) => {
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        setEdit(false)
    }, [tasks])
    return <>
        {
            edit ? <Edit el={el} setTasks={setTasks} setEdit={setEdit} /> : <li><input type="checkbox" /> {el} <button onClick={() => setEdit(true)}>Edit</button> <Delete el={el} setTasks={setTasks}/></li>
        }
    </>
}
const Edit = ({ el, setTasks }) => {

    const [text, setText] = useState(el)
    return <li>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input> <button onClick={() => setTasks((tasks) => {
            const newTasks = [...tasks];
            newTasks.map((ele) => {
                if (ele === el) {
                    newTasks[newTasks.indexOf(ele)] = text
                }
            })
            return newTasks;
        })}>Save</button> <Delete el={el} setTasks={setTasks}/>
    </li>
}
const App17 = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState(["buy milk", "Edit Tacos", "Brew Tea"]);

    return <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={(e) => setTasks((tasks) => [...tasks, text])}>ADD</button>
        <ul>
            {
                tasks.map((el, idx) => {
                    return <Task key={idx} el={el} setTasks={setTasks} tasks={tasks} />
                })
            }
        </ul>
    </div>
}

export default App17;