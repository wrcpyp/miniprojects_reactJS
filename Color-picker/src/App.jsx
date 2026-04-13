import React from "react"
import { useState } from "react"

export const App = () => {
    const [hexColor, setHexColor] = useState("#ef4444")
    const [customHex, setCustomHex] = useState("#ffffff")
    const presets = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6"]

    const changeCustomHex = (e) => {
        setCustomHex(e.target.value)
    }

    const hexColorChangeByInput = () => {
        if (/^#[0-9A-Fa-f]{6}$/.test(customHex)) {
            setHexColor(customHex)
        }
    }

	return (
		<>
			<div>
				<h3>current color</h3>
				<div style={{width: "50px", height: "50px", background: hexColor, color: "#fff", border: "1px solid #000"}}>{hexColor}</div>
			</div>

            <div>
                <h3>preset colors</h3>
                {presets.map((color) => (
                    <div
                    key={color}
                    style={{background: color, width: "50px", height: "50px", border: "1px solid #000"}}
                    onClick={() => setHexColor(color)}
                    />
                ))}
            </div>

            <div>
                <h3>custom hex</h3>
                <div style={{width: "50px", height: "50px", background: `${customHex}`, border: "1px solid #000"}}></div>
                <input type="text" onChange={changeCustomHex}/>
                <button onClick={hexColorChangeByInput}>apply</button>
            </div>
		</>
	)
}

export default App
