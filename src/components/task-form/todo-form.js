import React, { useState } from "react";
import './todo-form.css'

const TODOS = 'https://api.npoint.io/8d81cb7e13e594ae367a'

const initialState = {
    title: "",
    description: "",
    priority: "",
    status: "CREATED"
}
function TodoForm({onAddTodo}) {
    const [data, setData] = useState(initialState)

    function handleChange(e){
        e.preventDefault()
        setData({...data, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(TODOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data})
        })
        .then(r => r.json())
        .then(newTodo => {
            setData(initialState)
            onAddTodo(newTodo)
            console.log(newTodo)
        })
    }

    return (
        <div className="todo-form">
            <h2>New Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={data.title
                } onChange={handleChange}/>
                <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange}/>
                <input type="text" name="priority" placeholder="Priority" value={data.priority} onChange={handleChange}/>
                <input type="text" name="status" placeholder="Status" value={data.status} onChange={handleChange}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )

}

export default TodoForm