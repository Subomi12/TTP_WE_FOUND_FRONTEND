import React from 'react'
import '../styles/Login.css'

export default function Login(){
    
    return(
        <div>
            <h2>Login</h2>
            <form>
                <label>Username: </label>
                <input type = "text" /><br></br>
                <label>Password: </label>
                <input type = "text"/><br></br>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}