const TodoItem = ({ task, toggleTask, editTask, removeTask }) => {
    return (
        <div className="flex justify-between w-[300px] bg-gray-200 p-[10px] mt-[10px]">
            <div>
                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}/>
            </div>
            <p className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</p>
            <div>
                <button onClick={() => editTask(task.id)} className="border-[1px]">Edit</button>
                <button onClick={() => removeTask(task.id)} className="border-[1px]">Del</button>
            </div>
        </div>
    )
}

export default TodoItem