import React from 'react'
import Link from 'react-router-dom'
import '../Styles/Navbar.css'


export default function Navbar(){
    
    return(
        <nav>
            <h2>Logo</h2>
            <h2>We Found</h2>
            <Link to = "#">Cart</Link>
            <Link to = "#">Favorites</Link>
            <Link to = "#">Products</Link>
        </nav>
    )
}