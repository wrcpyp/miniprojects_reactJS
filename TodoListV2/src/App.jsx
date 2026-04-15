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
                <TodoList showTasks={tasks} />
            </div>
        </>
    )
}

export default App