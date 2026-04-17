import TodoItem from "./TodoItem"

const TodoList = ({ showTasks, markDone, edit, remove }) => {
    return (
        <div className="mt-[10px]">
            {showTasks.map(task => (
                <TodoItem key={task.id} markDone={markDone} task={task} edit={edit} remove={remove} />
            ))}
        </div>
    )
}

export default TodoList
