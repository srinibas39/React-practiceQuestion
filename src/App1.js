import { useState } from "react";

const App1=()=>{
    const [age, setAge] = useState("")
    const handleChange = (d) => {
    const currYear = d.split("-")[0];
    setAge(()=>2022 - currYear);
  };
  return (
    <div className="App">
      <h1>calculate age</h1>
      <h2>DOB</h2>
      <input onChange={(e) => handleChange(e.target.value)} type="date"></input>
      <h2>your age :{age}</h2>
    </div>
  );
}

export default App1;