import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(){

    const credentials = JSON.parse(sessionStorage.getItem('credentials'))

    function logout() {
        console.log("here")
        if (credentials)
            sessionStorage.removeItem("credentials")
    }

    return(
        <nav>
            <Link className="logoArea" to="/products">WeFound</Link>
            <Link className="cart" to="../cart">Cart</Link>
            {/*<Link className="Others" to="/">Favorites</Link>*/}
            <Link className="Others" to="/products">Products</Link>
            <Link className="Others" to="../" onClick={logout}>{credentials ? "Logout" : "Login"}</Link>
        </nav>
        
    )
}

export default Navbar