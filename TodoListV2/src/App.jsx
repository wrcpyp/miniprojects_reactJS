import { useState } from "react"
import FilterBar from "./components/FilterBar"
import TodoInput from "./components/TodoInput"
import "./index.css"
import TodoList from "./components/TodoList"

const App = () => {

    const [tasks, setTasks] = useState([])

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        }
        setTasks([...tasks, newTask])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const editTask = (id, newText) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, text: newText} : task
        ))
    }

    return (
        <>
            <div>
                <h1 className="text-[30px] font-bold">My Tasks</h1>
            </div>

            <div>
                <TodoInput addTask={addTask} />
            </div>

            <div>
                <FilterBar />
            </div>

            <div>
                <TodoList showTasks={tasks} edit={editTask} remove={removeTask} />
            </div>
        </>
    )
}

export default App