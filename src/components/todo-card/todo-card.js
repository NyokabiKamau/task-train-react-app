import React,{useState} from "react";
import './todo-card.css'
import {MdDeleteForever} from 'react-icons/md'
import Modal from "react-overlays/Modal";

var isEditing = false


const initial = {
        title: "",
        description: "",
        priority: "",
        status: "CREATED"
    }

 
function TodoCard({id, title, description, status, priority, deleteTodo, updateTodo}){
  const [showEditingForm, setEditingForm] = useState(false);

  var handleClose = () => setEditingForm(false);
  const [editdata, setEditData] = useState(initial)

  function handleChange(e){

      e.preventDefault()
      setEditData({...editdata, [e.target.name]:e.target.value})
      console.log(editdata)
  }


    const API = `https://api.npoint.io/8d81cb7e13e594ae367a/${id}`

    function handleDeleteTodo(){
        fetch(API,{
          method: "DELETE"
        })
        .then(()=>{
            deleteTodo(initial)
        })
    }
    function handleSubmit(e){
      editdata.id = id
      if(editdata.title == ""){
        editdata.title = title
      }
      if(editdata.priority == ""){
        editdata.priority = priority
      }
      if(editdata.description == ""){
        editdata.description = description
      }
      if(editdata.status == ""){
        editdata.status = status
      }
      e.preventDefault()
      fetch(API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({editdata}),
      })
        .then((r) => r.json())
        .then(updateTodo);
  }
    

    return (
      <>
      <ul className="cards">
            <li className="card" key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Priority: {priority}</h4>
                <h4>Status: {status}</h4>
                <button onClick={()=> handleDeleteTodo(id)}><MdDeleteForever/></button>
                <button onClick={() => setEditingForm(true)}>Edit</button>
            </li>
        </ul>
        {showEditingForm ? 
        <>
        <div className="todo-form">
         <h2>Edit Task</h2>
         <form onSubmit={handleSubmit}>
             <input type="text" name="title" onChange={handleChange} placeholder={title} />
             <input type="text" name="description" placeholder={description} onChange={handleChange} />
             <input type="text" name="priority" placeholder={priority} onChange={handleChange}/>
             <input type="text" name="status" placeholder={status} onChange={handleChange}/>
             <button type="submit">Edit Task</button>
             <button onClick={() => setEditingForm(false)}>close</button>
         </form>
        </div>
        </> : <></>
        }
        
      </>
        
    )
}
export default TodoCard