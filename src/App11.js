import { useEffect, useState } from "react";

const App11 = () => {
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState("");
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        setCopied(() => false)
    }, [fontFamily])
    useEffect(() => {
        setCopied(() => false)
    }, [fontSize])
    return <>
        <p style={{ fontSize: fontSize, fontFamily: fontFamily }}>Hey I am paragraph</p>
        <button onClick={() => setFontSize(() => fontSize + 8)}>+</button>
        <button onClick={() => fontSize > 16 ? setFontSize(() => fontSize - 8) : ""}>-</button>
        <button onClick={() => setFontFamily(() => "Arial")}>Arial</button>
        <button onClick={() => setFontFamily(() => "Roboto")}>Roboto</button>
        <button onClick={() => setCopied(() => true)}>{!copied ? "copyCSS" : "copied"}</button>
        {
            copied ? <p>{'font-family:' + fontFamily + "," + "font-size:" + fontSize + "px"}</p> : ""
        }
    </>
}

export default App11;