import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, editTask, removeTask }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <TodoItem key={task.id} task={task} editTask={editTask} removeTask={removeTask} toggleTask={toggleTask}></TodoItem>
                ))
            }
        </>
    )
};

export default TodoList;
