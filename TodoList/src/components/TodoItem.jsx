import { useState } from "react"

const TodoItem = ({ task, markDone, edit, remove }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [tempText, setTempText] = useState(task.text)

    const handleSave = () => {
        if (tempText.trim() !== "") edit(task.id, tempText)
        setIsEditing(false)
    }

    return (
        <div className="flex items-start gap-3 py-3 border-b border-stone-100 group">
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => markDone(task.id)}
                className="w-4 h-4 mt-0.5 accent-stone-700 cursor-pointer flex-shrink-0"
            />

            {/* Text / Edit Input */}
            {isEditing ? (
                <div className="flex flex-col gap-2 flex-1">
                    <input
                        type="text"
                        value={tempText}
                        onChange={(e) => setTempText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSave()}
                        autoFocus
                        className="w-full text-sm border-b border-stone-300 outline-none py-0.5 text-stone-700 bg-transparent"
                    />
                    <div className="flex gap-3">
                        <button onClick={handleSave} className="text-xs text-stone-600 hover:text-stone-900 transition-colors">Save</button>
                        <button onClick={() => setIsEditing(false)} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">Cancel</button>
                    </div>
                </div>
            ) : (
                <>
                    <span className={`flex-1 text-sm ${task.completed ? "line-through text-stone-300" : "text-stone-700"}`}>
                        {task.text}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setIsEditing(true)} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">Edit</button>
                        <button onClick={() => remove(task.id)} className="text-xs text-red-300 hover:text-red-500 transition-colors">Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoItem