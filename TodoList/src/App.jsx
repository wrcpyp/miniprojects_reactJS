import { useState } from "react"
import FilterBar from "./components/FilterBar"
import TodoInput from "./components/TodoInput"
import "./index.css"
import TodoList from "./components/TodoList"
import { useEffect } from "react"

const App = () => {

    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem("myTodoTasks")
            return savedTasks ? JSON.parse(savedTasks) : []
        } catch (error) {
            console.error("LocalStorage error : ", error)
            return []
        }
    })

    const [filter, setFilter] = useState("All")

    useEffect(() => {
        localStorage.setItem("myTodoTasks", JSON.stringify(tasks))
    }, [tasks])

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
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task))
    }

    const markDone = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === "Active") return !task.completed
        if (filter === "Done") return task.completed
        return true
    })

    const showActiveTasks = () => {
        setFilter("Active")
    }

    const showDoneTasks = () => {
        setFilter("Done")
    }

    const showAllTasks = () => {
        setFilter("All")
    }

    const clearTasks = () => {
        if (window.confirm("Are you sure to clear all tasks!!!")) {
            setTasks([])
        }
    }

    const clearCompletedTasks = () => {
        if (window.confirm("Are you sure to claer completed tasks!!!")) {
            const result = tasks.filter(task => task.completed === false)
            setTasks(result)
        }
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
                <FilterBar showActiveTasks={showActiveTasks} showDoneTasks={showDoneTasks} showAllTasks={showAllTasks} />
            </div>

            <div>
                <TodoList showTasks={filteredTasks} markDone={markDone} edit={editTask} remove={removeTask} />
            </div>

            <div>
                <button onClick={clearCompletedTasks} className="border-[1px] p-[5px] mr-[5px]">ClearCompleted</button>
                <button onClick={clearTasks} className="border-[1px] p-[5px] mt-[10px]">ClearAll</button>
            </div>
        </>
    )
}

export default App