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
    const [todoItem, setTodoItem] = useState(initialState)

    function handleChange(e){
        e.preventDefault()
        setTodoItem({...todoItem, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(TODOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({todoItem})
        })
        .then(r => r.json())
        .then(newTodo => {
            setTodoItem(initialState)
            onAddTodo(newTodo)
        })
    }

    return (
        <div className="todo-form" onSubmit={handleSubmit}>
            <h2>New Task</h2>
            <form>
                <input type="text" name="title" placeholder="Title" value={todoItem.tit
                } onChange={handleChange}/>
                <input type="text" name="description" placeholder="Description" value={todoItem.description} onChange={handleChange}/>
                <input type="text" name="priority" placeholder="Priority" value={todoItem.priority} onChange={handleChange}/>
                <input type="text" name="status" placeholder="Status" value={todoItem.status} onChange={handleChange}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )

}

export default TodoForm