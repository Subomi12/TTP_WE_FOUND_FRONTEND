import React, {useState} from 'react'
import '../styles/Login.css'
import Axios from "axios"
import oauth from 'axios-oauth-client'
//import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import MainSearch from './MainSearch'

export default function Login(){
    const navigate = useNavigate();
    const [formElements, setFormElemets] = useState({
        username:"",
        password:""
    })

    async function handleSubmit(event){
        event.preventDefault();

    }

    function handleChange(event){
        setFormElemets(prevFormElements =>({
            ...prevFormElements,
            [event.target.name]: event.target.value
        }))
    }

    
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input name="username" onChange={handleChange} type = "text" value={formElements.username}/><br></br>
                <label>Password: </label>
                <input name='password' onChange={handleChange} type = "text"/><br></br>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}