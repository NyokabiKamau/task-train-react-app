import React from "react";
import './header.css'
import { GoTasklist } from 'react-icons/go'

function Header() {

    return (
        <div>
            <h1 id="title">
                <span id="title_start">Minx'</span>
                <span id="title_middle">s</span>
                <span id="title_end"> Tasks</span>
                <span id="icon"> <GoTasklist/></span>
            </h1>
        </div>
    )

}

export default Header