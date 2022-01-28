import React from "react"
import Axios from "axios"

export default function Cart() {

    const [cartItems, setCartItems] = React.useState([])

    const credentials = JSON.parse(sessionStorage.getItem("credentials"))
    React.useEffect(function() {
        async function getCartItems() {
            const { data } = await Axios.get(`http://localhost:8080/api/weFoundUsers/${credentials.user.id}/cartItems`, {
                headers: {
                    "Authentication" : `Bearer ${credentials.token}`
                }
            })

            setCartItems(data.cartItems)

        }
        getCartItems().then(console.log("Got cart items!"))


    }, [])


    const items = cartItems.map(item => <Item item={item} />)

    return (
        <div>
            {items}
        </div>
    )


}