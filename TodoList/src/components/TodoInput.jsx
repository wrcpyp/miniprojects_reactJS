import { useState } from "react"

const TodoInput = ({ addTask }) => {
    const [text, setText] = useState("")
    return (
        <div className="mt-[10px]">
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Add a new task..." className="border-[1px] p-[5px]" value={text} />
            <button onClick={() => addTask(text)} className="border-[1px] ml-[10px] p-[5px]">+ Add</button>
        </div>
    )
}

export default TodoInput
