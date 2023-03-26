import React from "react";
import './header.css'
import { GoTasklist } from 'react-icons/go'
import {Link} from 'react-router-dom'

function Header({token, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <div>
            <h1 id="title">
                <span id="title_start">Minx'</span>
                <span id="title_middle">s</span>
                <span id="title_end"> Todos</span>
                <span id="icon"> <GoTasklist/></span>
            </h1>
            {token ? (
                <div>
                    <p>Welcome !</p>
                    <button id="logout" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/"><button id="login" >Login</button></Link>
            )}
        </div>
    )

}

export default Header