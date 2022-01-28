
import React, {useState} from 'react'
import '../styles/Login.css'
import Axios from "axios"
import oauth from 'axios-oauth-client'
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
        if(formElements.username === "username" && formElements.password === "password"){
            navigate("/products")
        }
    }

    function handleChange(event){
        setFormElemets(prevFormElements =>({
            ...prevFormElements,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <div className='loginDiv'> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username..." name="username" onChange={handleChange} type = "text" value={formElements.username}/><br></br>
                <input placeholder='Password...' name='password' onChange={handleChange} type = "text"/><br></br>
                <center><button type = "submit">Login</button></center>
            </form>
        </div>
    )
}