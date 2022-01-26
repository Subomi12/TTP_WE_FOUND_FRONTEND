
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

   async function generateKey(){
       const getClientCredentials = oauth.client(Axios.create(), {
            url: "https://api.kroger.com/v1/connect/oauth2/token",
            grant_type: 'client_credentials',
            client_id: process.env.REACT_APP_KROGER_CLIENTID,
            client_secret: process.env.REACT_APP_KROGER_CLIENTSECRET,
            scope: "product.compact"
        })

        var auth = await getClientCredentials()
        return auth;
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(formElements.username === "username" && formElements.password === "password"){
            const { access_token } = await generateKey();
            //console.log(access_token);
            navigate("/products", {
                access: access_token
            })
        }
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