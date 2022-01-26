import React from 'react'
// import Link from 'react-router-dom'
import '../Styles/Navbar.css'


export default function Navbar(){
    
    return(
        <nav className = "navbar">
            <h2 className = "logo">Logo</h2>
            <h2 className = "wefound">WeFound</h2>
            {/* <Link to = "#">Cart</Link>
            <Link to = "#">Favorites</Link>
            <Link to = "#">Products</Link> */}
        </nav>
        
    )
}