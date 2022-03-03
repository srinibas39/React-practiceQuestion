import { useState } from "react"
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";



const App14 = () => {
    const [state, setState] = useState({
        Home: false,
        About: false,
        Profile: false
    })
    const handlePage = (page) => {
        setState((state) => {
            const newState = {...state}
            Object.keys(newState).forEach((el) => {
                

                    newState[el] = el !== page ? false : true;
                
            })
            
            return newState;
        })
    }


    return <div>
        <button onClick={(e) => handlePage(e.target.innerText)}>Home</button>
        <button onClick={(e) => handlePage(e.target.innerText)}>About</button>
        <button onClick={(e) => handlePage(e.target.innerText)}>Profile</button>
        
        
        {state.Home&&<Home/>}
        {state.About&&<About/>}
        {state.Profile&&<Profile/>}

    </div>



}

export default App14;