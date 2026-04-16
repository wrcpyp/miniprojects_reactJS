import { useState } from "react"

const TodoItem = ({ task, edit, remove }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [tempText, setTempText] = useState(task.text)

    const toggleEditMode = () => {
        edit(task.id, tempText)
        setIsEditing(false)
    }

    return (
        <div>
            {isEditing ? (
                <div className="flex">
                    <div>
                        <input onChange={(e) => setTempText(e.target.value)} type="text" value={tempText} className="border-[1px]" />
                    </div>
                    <div>
                        <button onClick={toggleEditMode} className="ml-[10px] border-[1px]">Save</button>
                        <button onClick={() => setIsEditing(false)} className="ml-[10px] border-[1px]">Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="flex">
                    <div>
                        <p>{task.text}</p>
                    </div>
                    <div>
                        <button onClick={() => setIsEditing(true)} className="ml-[10px] border-[1px]">Edit</button>
                        <button onClick={() => remove(task.id)} className="ml-[10px] border-[1px]">Delete</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default TodoItem
