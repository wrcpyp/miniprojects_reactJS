import TodoItem from "./TodoItem"

const TodoList = ({ showTasks }) => {
    return (
        <div className="mt-[10px]">
            {showTasks.map(task => (
                <h1 key={task.id}>{task.text}</h1>
            ))}
        </div>
    )
}

export default TodoList
