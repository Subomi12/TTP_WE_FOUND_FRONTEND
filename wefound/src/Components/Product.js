import React, {useState} from "react";
import axios from 'axios'
import dummyData from "../dummyData";
import { useLocation, Link } from 'react-router-dom'
import NavBar from "./Navbar";
import "../styles/product.css"


function Product(prop){
    const location = useLocation();

    console.log(location)

    async function addItem(){
        await axios.post("http://localhost:8080/api/cartItems",{
            ...location.state.wholeItem
        })
    }
    
    return(
        <>
            <div className="product">
                <h3>Brand: {location.state.brand}</h3>
                <h2>{location.state.title} ({location.state.size})</h2>
                <img src={location.state.img}></img>
                <div className="prices">
                    <h4 className="price">${location.state.price}</h4>
                    <h5 className="promo">Promo: ${location.state.promoPrice}</h5>
                </div>
                <center>
                <Link  to="/cart"><button onClick={addItem} className="cart-btn">Add to Cart</button></Link>
                <p>-or-</p>
                <button className="buyNow-btn">Buy Now</button>
                </center>
            </div>

            <hr className="seperateLine"/>

            <div className="productDetails">
                <h2>Product details:</h2>
                <h4>Dimensions:</h4>
                <p>{location.state.height}" X {location.state.width}" X {location.state.height}"</p>

                <h4>Size:</h4>
                <p>{location.state.size}</p>

                <h4>Fulfilment:</h4>
                <p>Curbside pickup: {location.state.fulfillment.curbside ? "yes" : "no"}</p>
                <p>Home delivery: {location.state.fulfillment.delivery ? "yes" : "no"}</p>
                <p>In Store: {location.state.fulfillment.inStore ? "yes" : "no"}</p>
                <p>Ship to Home: {location.state.fulfillment.shipToHome ? "yes" : "no"}</p>
            </div>

        </>
    )
}

export default Product