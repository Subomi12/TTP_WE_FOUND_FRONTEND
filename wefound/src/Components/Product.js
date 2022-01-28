import React, {useState} from "react";
import axios from 'axios'
import dummyData from "../dummyData";
import { useLocation, Link } from 'react-router-dom'
import NavBar from "./Navbar";
import "../styles/product.css"
import Navbar from "./Navbar";
import Footer from "./Footer"


function Product(prop){
    const location = useLocation();

    console.log(location)
    const credentials = JSON.parse(sessionStorage.getItem('credentials'))
    async function addItem(){
        await axios.post(`https://we-found-backend.herokuapp.com/api/cartItems`, {
            ...location.state.wholeItem,
            weFoundUserId: credentials.user.id
        }, {
            headers: {
                "Authorization" : `Bearer ${credentials.token}`
            }
        }
        );

    }
    
    return(
        <>
            <Navbar />
            <div className="product">
                <div>
                    <h2>Brand: {location.state.brand}</h2>
                    <h3>{location.state.title} ({location.state.size})</h3>
                    <img src={location.state.img}></img>
                    <h4>Regular Price: ${location.state.price}</h4>
                    <h4>Promotional Price: ${location.state.promoPrice}</h4>
                </div>
                <div>
                    <center>
                        <Link  to="/cart"><button onClick={addItem} className="cart-btn">Add to Cart</button></Link>
                        <p>-or-</p>
                        <button className="buyNow-btn">Buy Now</button>
                    </center>
                </div>
            </div>

            <hr className="seperateLine"/>
            <h2 style={{textAlign: "center", fontSize: "50px"}}>Product details</h2>
            <div className="productDetails">
                <div>
                    <h4>Dimensions</h4>
                    <p>{location.state.height} X {location.state.width} X {location.state.height}</p>
                    <h4>Size</h4>
                    <p>{location.state.size}</p>
                </div>

                <div>
                    <h4>Fulfilment</h4>
                    <p>Curbside Pickup: {location.state.fulfillment.curbside ? "Yes" : "No"}</p>
                    <p>Delivery to Home: {location.state.fulfillment.delivery ? "Yes" : "No"}</p>
                    <p>Sold In Store: {location.state.fulfillment.inStore ? "Yes" : "No"}</p>
                    <p>Ship to Home: {location.state.fulfillment.shipToHome ? "Yes" : "No"}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product