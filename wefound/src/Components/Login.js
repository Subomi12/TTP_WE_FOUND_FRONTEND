import React, { useImperativeHandle } from 'react'
import '../Styles/Login.css'

export default function Login(){
    
    function handleSubmit(e){
        e.preventDefault();
        console.log('You clicked Submit')
    }

    function handleClick(){
        console.log('You clicked Submit')
    }

    return(
        <div>
            <h2 className = "login">Login</h2>
            <form className = "form" >
                <label className = "username">Username: </label>
                <input className = "usernameInput" type = "text" /><br></br>
                <label>Password: </label>
                <input className = "passwordInput" type = "text"/><br></br>
                <button type = "submit" onClick = {handleClick} onSubmit = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}