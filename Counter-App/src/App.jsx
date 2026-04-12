import { useState } from "react"

const App = () => {
	const [count, setCount] = useState(0)
	const [stepSize, setStepSize] = useState(1)
    const [history, setHistory] = useState([])

    const increment = () => {
        setCount(count + stepSize)
        setHistory([...history, `+${stepSize}`])
    }
    
    const decrement = () => {
        setCount(count - stepSize)
        setHistory([...history, `-${stepSize}`])
    }

    const reset = () => {
        setCount(0)
        setHistory([...history, `reset`])
    }
	return (
		<>
			<div>
				<h3>current count</h3>
				<h1>{count}</h1>
				<button onClick={decrement}>-</button>
				<button onClick={reset}>reset</button>
				<button onClick={increment}>+</button>
			</div>
            <div>
                <h4>stepsize</h4>
                <h3>{stepSize}</h3>
                <button onClick={() => setStepSize(stepSize - 1)}>-</button>
                <button onClick={() => setStepSize(stepSize + 1)}>+</button>
            </div>
            <div>
                <h4>history</h4>
                <h3>
                    {
                        history.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))
                    }
                </h3>
            </div>
		</>
	)
}

export default App
