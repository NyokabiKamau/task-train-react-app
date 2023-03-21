import React from "react";
import './task-form.css'

function TaskForm() {

    return (
        <div className="task-form">
            <h2>New Task</h2>
            <form>
                <input type="text" name="title" placeholder="Title"/>
                <input type="text" name="description" placeholder="Description"/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )

}

export default TaskForm