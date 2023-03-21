import React from "react";
import './task-card.css'
function TaskCard(){

    return (
        <ul className="cards">
            <li className="card">
                <h4>Task 1</h4>
                <p>Some Description of our tasks come here .....</p>
                <button>Delete</button>
            </li>
        </ul>
    )
}
export default TaskCard