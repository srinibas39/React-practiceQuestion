import { useEffect, useState } from "react";

const App9 = () => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(false);
    }, [password1])
    useEffect(() => {
        setDisabled(false);
    }, [password2])

    return <>
        password1 <input value={password1} onChange={(e) => setPassword1(() => e.target.value)} type="password" />
        password2 <input value={password2} onChange={(e) => setPassword2(() => e.target.value)} type="password" />
        <button
            disabled={disabled ? disabled : ""}
            onClick={() => {
                password1 !== password2 ? setDisabled(true) : setDisabled(false)
            }}>submit</button>

        {
            (!disabled && password1 === password2) ? <p>{password1}</p> : ""

        }
    </>
}

export default App9;