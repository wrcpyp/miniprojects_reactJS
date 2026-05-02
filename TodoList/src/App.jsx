import { useState, useEffect } from "react"
import FilterBar from "./components/FilterBar"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import "./index.css"

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
        if (text.trim() === "") return
        setTasks([...tasks, { id: Date.now(), text, completed: false }])
    }

    const removeTask = (id) => setTasks(tasks.filter(t => t.id !== id))
    const editTask = (id, newText) => setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t))
    const markDone = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))

    const filteredTasks = tasks.filter(t => {
        if (filter === "Active") return !t.completed
        if (filter === "Done") return t.completed
        return true
    })

    const clearTasks = () => {
        if (window.confirm("Clear all tasks?")) setTasks([])
    }

    const clearCompletedTasks = () => {
        if (window.confirm("Clear completed tasks?"))
            setTasks(tasks.filter(t => !t.completed))
    }

    const remaining = tasks.filter(t => !t.completed).length

    return (
        <div className="min-h-screen bg-stone-50 flex justify-center px-4 py-16">
            <div className="w-full max-w-md">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-stone-800 tracking-tight">My Tasks</h1>
                    <p className="text-sm text-stone-400 mt-1">{remaining} task{remaining !== 1 ? "s" : ""} remaining</p>
                </div>

                {/* Input */}
                <TodoInput addTask={addTask} />

                {/* Filter */}
                <FilterBar
                    filter={filter}
                    showAllTasks={() => setFilter("All")}
                    showActiveTasks={() => setFilter("Active")}
                    showDoneTasks={() => setFilter("Done")}
                />

                {/* List */}
                <div className="mt-2">
                    {filteredTasks.length === 0 ? (
                        <p className="text-center text-stone-300 py-12 text-sm">Nothing here</p>
                    ) : (
                        <TodoList showTasks={filteredTasks} markDone={markDone} edit={editTask} remove={removeTask} />
                    )}
                </div>

                {/* Footer */}
                {tasks.length > 0 && (
                    <div className="flex gap-4 justify-end mt-6 pt-4 border-t border-stone-200">
                        <button onClick={clearCompletedTasks} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">
                            Clear completed
                        </button>
                        <button onClick={clearTasks} className="text-xs text-red-400 hover:text-red-600 transition-colors">
                            Clear all
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App