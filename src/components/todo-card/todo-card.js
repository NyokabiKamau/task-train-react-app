import React from "react";
import './todo-card.css'
function TodoCard({title, description, status, priority}){

    return (
        <ul className="cards">
            <li className="card">
                <h4>{title}</h4>
                <p>{description}</p>
                <p>{status} {priority}</p>
                <button>Delete</button>
            </li>
        </ul>
    )
}
export default TodoCard