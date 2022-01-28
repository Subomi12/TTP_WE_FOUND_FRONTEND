import React from "react"

export default function Item({ item }) {



    const [quantity, setQuantity] = React.useState(item.quantity)


    return (
        <div className="cartCard">
            <div>
                <h2>item.description</h2>
                <h3>item.brand</h3>
                <br></br>
                <p></p>
            </div>
            <div>

            </div>

        </div>
    )
}