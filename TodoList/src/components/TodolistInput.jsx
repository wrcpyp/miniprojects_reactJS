import React from "react";
import { useState } from "react";

const TodolistInput = ({addTask}) => {
    const [text, setText] = useState("")
    return (
        <>
            <div>
                <input onChange={(e) => setText(e.target.value)} className="border-[1px]" type="text" placeholder="Add a new task..." />
                <button onClick={() => addTask(text)} className="border-[1px]">+ Add</button>
            </div>
        </>
    )
}

export default TodolistInput
