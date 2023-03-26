import './login.css'
import React, { useState } from "react"
import { GoTasklist } from 'react-icons/go'
import { IoIosCreate, IoIosAddCircle,  } from 'react-icons/io'
import { MdDelete, MdEditNote } from 'react-icons/md'

function Login() {

    // setting state

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    let loginToken = {
        "email": email,
        "password": password
    }

    let registerToken = {
        "name": username,
        "email": email,
        "password": password
    }


    // function to switch forms

    function openRegister() {
        const element = document.getElementById('card')
        element.style.transform = "rotateY(-180deg)"
    }

    function openLogin() {
        const element = document.getElementById('card')
        element.style.transform = "rotateY(0deg)"
    }


     // function to navigate to home page after form submission

     function showingonLog(){
        const token = {
            email,
            password
        }
        // setToken(token)
    }

    function showingonReg(){
        const token = {
            username,
            email,
            password
        }
        // setToken(token)
    }

   
    // handling input data in form

    function handleUser(e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    function handleEmail(e) {
        e.preventDefault()
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }


    // handling onclick buttons

    function handleLoginBtn(e) {
        e.preventDefault()
        showingonLog()
        handleLogIn()
    }

    function handleRegisterBtn(e) {
        e.preventDefault()
        showingonReg()
        handleRegister()
    }


    // handling post requests for data to persist in the database

    function handleRegister() {
        fetch('https://api.npoint.io/32e93a4b672a59cf173b',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerToken)
        })
    }

  
    function handleLogIn(){
        fetch('https://api.npoint.io/4b6f3e2ee13b937dac69',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginToken)
            })
            .then(res => res.json())
            .then((data)=>{
            console.log(data)
            })
    }


    // handling on form submission 

    const handleSubmitOfLog = e => {
        e.preventDefault()
        const token = {
            email,
            password
        }
        // setToken(token)
    }

    const handleSubmitOfReg = e => {
        e.preventDefault()
        const token = {
            username,
            email,
            password
        }
        // setToken(token)
    }

    return (
        <div>
            <div className="container-t">
                <div id="htitle">
                    <h1 className='ms-5'>
                        <span>Minx'</span>
                        <span id="logo-title_middle">s</span>
                        <span> Todos</span>
                        <span id="logo-icon"> <GoTasklist/></span>
                    </h1>
                    <ul id="todos">
                        <li><IoIosCreate/> Create</li>
                        <li><IoIosAddCircle/> Add</li>
                        <li><MdDelete/> Delete</li>
                        <li><MdEditNote/> Update</li>
                    </ul>
                </div>
                <div className="card-t">
                    <div className="inner-box-t" id="card">
                        
                        <div className="card-front-t">
                            
                            <h2>REGISTER</h2>
                            <form onSubmit={handleSubmitOfReg}>

                                <input 
                                type="text" 
                                style={{color: "#FFFFFF"}}
                                value={username}
                                placeholder="Username"
                                className="input-box-t" required 
                                onChange={handleUser}
                                />

                                <input type="email" 
                                style={{color: "#FFFFFF"}} className="input-box-t" placeholder="Your Email" value={email} required onChange={handleEmail}/>

                                <input type="password"  style={{color: "#FFFFFF"}}  className="input-box-t" placeholder="Password" value={password} required onChange={handlePassword}/>

                                <button type="submit" className="submit-btn"  onClick={handleRegisterBtn}>Register</button>
                            </form>

                            <button type="button" className="btn" onClick={openRegister} >I have an account</button>
                        </div>

                        <div className="card-back-t">
                            <h2>LOGIN</h2>
                            <form onSubmit={handleSubmitOfLog}>
                                <input type="email" 
                                style={{color: "#FFFFFF"}}  className="input-box-t" placeholder="Your Email" value={email} required  onChange={handleEmail}/>

                                <input type="password" className="input-box-t" style={{color: "#FFFFFF"}}  placeholder="Password" value={password} required onChange={handlePassword}/>

                                <button type="submit" className="submit-btn"  onClick={handleLoginBtn}>Login</button>
                            </form>
                            <button type="button" className="btn" onClick={openLogin}>I'm New Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login