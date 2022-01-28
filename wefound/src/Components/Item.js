import React from "react"
import "../styles/Item.css"
import plusImg from "../images/icons8-plus-+-48.png"
import minusImg from "../images/icons8-minus-48.png"
import Axios from "axios"
import axios from "axios";

export default function Item({ item, removeCartItem }) {

    console.log(item)

    const [quantity, setQuantity] = React.useState(item.quantity)

    function quantityHandler(event) {
        if (event.target.name === "subtract" && quantity !== 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
        if (event.target.name === "add" && quantity !== 10) {
            setQuantity(prevQuantity => prevQuantity + 1)
        }
    }

    const { images } = item
    const { sizes } = images.find(image => image.perspective === "front")
    const { url } = sizes.find(size => size.size === "medium")

    const items = item.items[0]
    const { price } = items



    return (
        <div className="cartCard">
            <div className="titleBrand">
                <h2>{item.description}</h2>
                <h3>{item.brand}</h3>
                <br></br>
            </div>
            <div className="cartImage">
                <img src={url} />
            </div>
            <div className="quantity">
                <p>Quantity</p>
                <div className="quantityChanger">
                    <img src={minusImg} name="subtract" alt="minus symbol" onClick={quantityHandler} />
                    <p>{quantity}</p>
                    <img src={plusImg} name="add" alt="plus symbol" onClick={quantityHandler} />
                </div>
                <button className="removeItemButton" onClick={() => removeCartItem(item.id)}>Remove</button>
            </div>
            <div className="cartPricing">
                <p>Regular Price: ${Number(price.regular).toFixed(2)}</p>
                <p>Promotional Price: ${Number(price.promo).toFixed(2)}</p>
                <p>Total: ${price.promo ? Number(price.promo*quantity).toFixed(2) : Number(price.regular*quantity).toFixed(2) }</p>
                {price.promo != 0 && <p>You saved ${Number(price.regular*quantity-price.promo*quantity).toFixed(2)}!</p>}
            </div>

        </div>
    )
}