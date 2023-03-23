import React from "react";
import './todo-card.css'
function TodoCard({title, description, status, priority}){

    return (
        <ul className="cards">
            <li className="card">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Priority: {priority}</h4>
                <h4>Status: {status}</h4>
                <button>Delete</button>
                <button>Edit</button>
            </li>
        </ul>
    )
}
export default TodoCard