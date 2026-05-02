import { useState } from "react"

const TodoInput = ({ addTask }) => {
    const [text, setText] = useState("")

    const handleAdd = () => {
        addTask(text)
        setText("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleAdd()
    }

    return (
        <div className="flex gap-2 mb-6">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a new task..."
                className="flex-1 bg-white border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 placeholder-stone-300 outline-none focus:border-stone-400 transition-colors"
            />
            <button
                onClick={handleAdd}
                className="bg-stone-800 hover:bg-stone-700 text-white text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
                Add
            </button>
        </div>
    )
}

export default TodoInput