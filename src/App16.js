import { useState } from "react"




const App16=()=>{
   
    const [form,setForm]=useState({
        name:"",
        artwork:{
            title:"",
            city:"",
            image:""
        }
    })
    const handleName=(e)=>{
      setForm({
          ...form,
          name:e.target.value
      })
    }

    const handleCity=(e)=>{
        setForm({
            ...form,
            artwork:{...form.artwork,
             city:e.target.value
            }
        })
    }
    const handleTitle=(e)=>{
        setForm({
            ...form,
            artwork:{...form.artwork,
             title:e.target.value
            }
        })
    }
    const handleImage=(e)=>{
        setForm({
            ...form,
            artwork:{...form.artwork,
             image:e.target.value
            }
        })
    }

    console.log(form);
    return <div>
        <label>Name:
            <input value={form.name} onChange={(e)=>handleName(e)} type="text"></input>
        </label>
        <label>Title:
            <input value={form.artwork.title} onChange={(e)=>handleTitle(e)} type="text"></input>
        </label>
        <label>City:
            <input value={form.artwork.city} onChange={(e)=>handleCity(e)} type="text"></input>
        </label>
        <label>Image:
            <input value={form.artwork.Image} onChange={(e)=>handleImage(e)}  type="text"></input>
        </label>
        <div>
           <p> {form.artwork.title} by {form.name} (located in {form.artwork.city})</p>
           <img src={form.artwork.image}></img>
        </div>
    </div>
}

export default App16;