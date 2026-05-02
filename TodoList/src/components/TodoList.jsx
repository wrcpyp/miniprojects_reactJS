import TodoItem from "./TodoItem"

const TodoList = ({ showTasks, markDone, edit, remove }) => {
    return (
        <div>
            {showTasks.map(task => (
                <TodoItem key={task.id} task={task} markDone={markDone} edit={edit} remove={remove} />
            ))}
        </div>
    )
}

export default TodoList