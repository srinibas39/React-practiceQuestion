import { useState } from "react";
import "./Toast.css"

// const ToastComponent = ({ handleToast, toastClass }) => {
//     return <div className={toastClass}>
//         <p>Hey I am a toast</p>
//         <button onClick={(e) => handleToast(e.target.value)}>Hide</button>
//     </div>
// }
// const ButtonComponent = ({ handleToast, text }) => {
//     return <button onClick={() => handleToast(text)}>{text}</button>
// }

// const Toast = () => {
//     const [displayToast, setDisplayToast] = useState({
//         showToast: false,
//         success: false,
//         warning: false,
//         alert: false
//     });

//     const handleToast = (text) => {
//         setDisplayToast((displayToast) => {
//             const newDisplayToast = { ...displayToast }
//             Object.keys(newDisplayToast).forEach((el) => {
                 
//                 newDisplayToast[el] = el === text ?true:false ;

//             })
//             return newDisplayToast;
//         })
//     }
//     return <>
//         <div>

//             {
//                 displayToast.showToast ? <ToastComponent toastClass={""} displayToast={displayToast} handleToast={handleToast} /> : <ButtonComponent text={"showToast"} displayToast={displayToast} handleToast={handleToast} />
//             }
//         </div>
//         <div>

//             {
//                 displayToast.success ? <ToastComponent toastClass={"success"} displayToast={displayToast} handleToast={handleToast} /> : <ButtonComponent text={"success"} displayToast={displayToast} handleToast={handleToast} />
//             }
//         </div>
//         <div>

//             {
//                 displayToast.warning ? <ToastComponent toastClass={"warning"} displayToast={displayToast} handleToast={handleToast} /> : <ButtonComponent text={"warning"} displayToast={displayToast} handleToast={handleToast} />
//             }
//         </div>
//         <div>

//             {
//                 displayToast.alert ? <ToastComponent toastClass={"alert"} displayToast={displayToast} handleToast={handleToast} /> : <ButtonComponent text={"alert"} displayToast={displayToast} handleToast={handleToast} />
//             }
//         </div>
//     </>

// }

// export default Toast;


const ToastComponent=({item,setItems})=>{

    const [displayToast,setDisplayToast]=useState(false);

  
    return <>{displayToast?<div className={item}> I am a {item} toast<button onClick={()=>setDisplayToast(()=>false)}>Hide</button></div>:<div><button onClick={()=>setDisplayToast(()=>true)}>{item}</button></div>}
 
    </> 
}

const ToastComponents=({items,setItems})=>{
    return <div>{
        items.map((el,idx)=>{
            return <ToastComponent key={idx} item={el} setItems={setItems}/>
        })
        }</div>
}

const Toast=()=>{
 
    const[items,setItems]=useState(["show Toast","success","warning","alert"]);
    return <ToastComponents items={items} setItems={setItems}/>
}

export default Toast;