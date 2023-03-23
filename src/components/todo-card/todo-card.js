import React from "react";
import './todo-card.css'
import {MdDeleteForever} from 'react-icons/md'

function TodoCard({id, title, description, status, priority, deleteTodo}){

    return (
        <ul className="cards">
            <li className="card" key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Priority: {priority}</h4>
                <h4>Status: {status}</h4>
                <button onClick={()=> deleteTodo(id)}><MdDeleteForever/></button>
                <button>Edit</button>
            </li>
        </ul>
    )
}
export default TodoCard