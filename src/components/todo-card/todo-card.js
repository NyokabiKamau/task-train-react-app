import React from "react";
import './todo-card.css'
import {MdDeleteForever} from 'react-icons/md'

const initial = {
        title: "",
        description: "",
        priority: "",
        status: "CREATED"
    }

 
function TodoCard({id, title, description, status, priority, deleteTodo, updateTodo}){

    const API = `https://api.npoint.io/8d81cb7e13e594ae367a/${id}`

    function handleDeleteTodo(){
        fetch(API,{
          method: "DELETE"
        })
        .then(()=>{
            deleteTodo(initial)
        })
    }
    
    function handleUpdateTodo() {
        fetch(API, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({initial}),
        })
          .then((r) => r.json())
          .then(updateTodo);
      }

    return (
        <ul className="cards">
            <li className="card" key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Priority: {priority}</h4>
                <h4>Status: {status}</h4>
                <button onClick={()=> handleDeleteTodo(id)}><MdDeleteForever/></button>
                <button onClick={() => handleUpdateTodo(id)}>Edit</button>
            </li>
        </ul>
    )
}
export default TodoCard