
import React, {useState} from 'react'
import '../styles/Login.css'
import Axios from "axios"
import oauth from 'axios-oauth-client'
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "./Navbar"


export default function Login(props) {

    const navigate = useNavigate();

    const credentials = sessionStorage.getItem("credentials")

    React.useEffect(function() {
        if (credentials)
            navigate("/products")
    })


    const [formElements, setFormElemets] = useState({
        username: "",
        password: ""
    })

    const [showError, setShowError] = useState(false)

    async function handleSubmit(event){
        event.preventDefault();

        try {
            const {data} = await Axios.post("https://we-found-backend.herokuapp.com/api/weFoundUsers/login", {...formElements})
            sessionStorage.setItem('credentials', JSON.stringify(data))
            navigate("/products")
        } catch(error) {
            console.log(error)
            setShowError(true)
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
            <Navbar/>
            {!credentials && <div className='loginDiv'>
                <h1><em>We Found</em></h1>
                <form onSubmit={handleSubmit}>
                <input placeholder="Username..." name="username" onChange={handleChange} type = "text" value={formElements.username}/><br></br>
                <input placeholder='Password...' name='password' onChange={handleChange} type = "password"/><br></br>
            {showError && <h3 className="errorMsg">Your username or password is incorrect. Please try again.</h3>}
                <center><button type = "submit">Login</button></center>
                </form>
                <p style={{textAlign: "center"}}>Don't have an account? <Link to={"/signup"}><u>Sign up here!</u></Link></p>
                </div>}
        </div>

    )
}