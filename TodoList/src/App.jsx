import { useState } from 'react';
import FilterBar from './components/FilterBar';
import TodolistInput from './components/TodolistInput';
import './index.css'
import TodoList from './components/TodoList';

const App = () => {
    const [tasks, setTasks] = useState([])

    const addTask = (text) => {
        setTasks([...tasks, {id: Date.now(), text, completed: false}])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task
        ))
    }

    return (
        <>
            <h1 className="text-[40px] font-bold">My Tasks</h1>
            <TodolistInput addTask={addTask}></TodolistInput>
            <FilterBar></FilterBar>
            <TodoList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask}></TodoList>
        </>
    )
}

export default App;
