import React from "react"
import Navbar from "./Navbar";
import Axios from "axios"
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {

    const [showError, setShowError] = React.useState(false)
    const [requireMessage, setRequireMessage] = React.useState(false)
    const [showNotEqual, setShowNotEqual] = React.useState(false)
    const navigate = useNavigate()

    const [formElements, setFormElements] = React.useState({
        username: "",
        password: "",
        confirmPass: "",
        firstName: "",
        lastName: "",
        email : "",
        street_address: "",
        zipcode: "",
        city: "",
        state: "",
        country: ""
    })

    async function handleSubmit(event) {
        event.preventDefault()

        if (formElements.username === "" || formElements.password === "") {
            setRequireMessage(true)
            return
        }

        if (formElements.password !== formElements.confirmPass) {
            setShowNotEqual(true)
            return
        }

        const databaseData = {...formElements, username: formElements.username.toLowerCase()}

        try {
            const {data} = await Axios.post("https://we-found-backend.herokuapp.com/api/weFoundUsers/signup", {...databaseData})
            sessionStorage.setItem('credentials', JSON.stringify(data))
            navigate("/products")
        } catch (e) {
            setShowError(true)
            console.log(e)
        }
    }

    function handleChange(event) {
        setFormElements(prevFormElements => ({
            ...prevFormElements,
            [event.target.name] : event.target.value
        }))
    }

    return (
        <div>
            <Navbar />
            <div className="userSignUp">
                {showError ? <h1 style={{color: "red", fontWeight: "bold"}}>Sorry! An error has occurred :(</h1>
                    : <h1>Create a <em>We Found</em> Account</h1>
                }
                <form className="userSignUpForm" onSubmit={handleSubmit}>
                    <div className="formBox">
                        <div className="inputBox">
                            <label>First Name</label>
                            <input type="text" name="firstName" value={formElements.firstName} onChange={handleChange}/>
                        </div>
                        <div className="inputBox">
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={formElements.lastName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="formBox">
                        <div className="inputBox">
                            <label>User Name</label>
                            <input type="text" name="username" value={formElements.username} onChange={handleChange} />
                            {requireMessage && <p className="errorMsg">This field is required</p>}
                        </div>
                        <div className="inputBox">
                            <label>Email</label>
                            <input type="text" name="email" value={formElements.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="formBox">
                        <div className="inputBox">
                            <label>Password</label>
                            <input type="password" name="password" value={formElements.password} onChange={handleChange} />
                            {requireMessage && <p className="errorMsg">This field is required</p>}
                        </div>
                        <div className="inputBox">
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPass" value={formElements.confirmPass} onChange={handleChange} />
                            {showNotEqual && <p className="errorMsg">Passwords Do Not Match</p>}
                        </div>
                    </div>
                    <div className="formBox">
                        {/*<div className="inputBox">*/}
                        {/*    <label>Street Address</label>*/}
                        {/*    <input type="text" name="street_address" value={formElements.street_address} onChange={handleChange} />*/}
                        {/*</div>*/}
                        <div className="inputBox">
                            <label>ZipCode</label>
                            <input type="text" name="zipcode" value={formElements.zipcode} onChange={handleChange} />
                        </div>
                        {/*<div className="inputBox">*/}
                        {/*    <label>City</label>*/}
                        {/*    <input type="text" name="city" value={formElements.city} onChange={handleChange} />*/}
                        {/*</div>*/}
                        {/*<div className="inputBox">*/}
                        {/*    <label>State</label>*/}
                        {/*    <input type="text" name="state" value={formElements.state} onChange={handleChange} />*/}
                        {/*</div>*/}
                        {/*<div className="inputBox">*/}
                        {/*    <label>Country</label>*/}
                        {/*    <input type="text" name="country" value={formElements.country} onChange={handleChange} />*/}
                        {/*</div>*/}

                        <button className="register">Register</button>
                    </div>
                </form>
            </div>
        </div>

    )

}