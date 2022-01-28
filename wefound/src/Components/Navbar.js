
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function NavBar(){
    return(
        <nav>
            <Link className="logoArea" to="/products">WeFound</Link>
            <Link className="cart" to="/">Cart</Link>
            <Link className="Others" to="/">Favorites</Link>
            <Link className="Others"  to="/products">Products</Link>
            <Link className="Others"  to="/login">Login</Link>
        </nav>
        
    )
}

export default Navbar