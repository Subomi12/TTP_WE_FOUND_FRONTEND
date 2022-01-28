import React from "react"
import Axios from "axios"
import Item from "./Item"
import axios from "axios";
import { nanoid } from "nanoid"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Cart() {

    const [cartItems, setCartItems] = React.useState([])

    const credentials = JSON.parse(sessionStorage.getItem("credentials"))
    console.log(credentials)
    React.useEffect(function() {
        async function getCartItems() {

            const { data } = await axios.get(`http://localhost:8080/api/weFoundUsers/${credentials.user.id}/cartItems`, {
                headers: {
                    "Authorization" : `Bearer ${credentials.token}`
                }
            });
            // const { data } = await Axios.get(`http://localhost:8080/api/weFoundUsers/${credentials.user.id}/cartItems`, {
            //     headers: {
            //         "Authentication" : `Bearer ${credentials.token}`
            //     }
            // })

            setCartItems(data.cartItems)

        }
        getCartItems().then(console.log("Got cart items!"))


    }, [])

    async function removeCartItem(id) {
        await axios.get(`http://localhost:8080/api/cartItems/${id}`, {
            headers: {
                "Authorization" : `Bearer ${credentials.token}`
            }
        });
        async function getCartItems() {

            const { data } = await axios.get(`http://localhost:8080/api/weFoundUsers/${credentials.user.id}/cartItems`, {
                headers: {
                    "Authorization" : `Bearer ${credentials.token}`
                }
            });
            // const { data } = await Axios.get(`http://localhost:8080/api/weFoundUsers/${credentials.user.id}/cartItems`, {
            //     headers: {
            //         "Authentication" : `Bearer ${credentials.token}`
            //     }
            // })

            setCartItems(data.cartItems)

        }
        getCartItems().then(console.log("Got cart items!"))
    }

    const items = cartItems.map(item => <Item key={nanoid()} item={item} removeCartItem={removeCartItem} />)

    return (
        <div>
            <Navbar />
            <h1>Your Cart Items</h1>
            <h2>View, add, or remove items from your cart here!</h2>
            {items.length > 0 ? items : <h1>Currently, you have no items in your cart. <Link to={"../products"}>Let's go add some!</Link></h1>}
            <div className="buttonHolder">
                {items.length > 0 && <button>Checkout</button>}
            </div>
            <Footer />
        </div>
    )


}