import React, {useState} from 'react'
import '../Styles/Cart.css'

export default function Cart(){
    
    const [cartItems, setCartItems] = useState([
        {
            // id:'1',
            name:'Banana ',
            price: 1.99,
            quantity:''
        },
        {
            // id:'2',
            name: 'Apple ',
            price: 1.50,
            quantity:''
        },
        {
            // id:'3',
            name: 'Milk',
            price: 2.00,
            quantity:''
        },

    ])

    function sum(){
        const num = [1,2,3]
        let Sum = num.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)
          console.log(Sum)
    }
    
           
    
        
    return(
        <div className = "div">
            <h1 className = "cart" >Shopping Cart</h1>
            <ul className = "items">
                {cartItems.map(item =>(
                    <li key = {item.id}>
                        <div >{item.id}</div>
                        <div >{item.name}</div>
                        <div >{item.price}</div>
                        <label> Quantity: </label>
                        <select className = "dropdown">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </li>
                ))}
                <h2>Total = {cartItems.reduce((totalPrice, item) => {
                    return totalPrice += item.price
                },0)}</h2>
            </ul>
             <button className = "checkout"> Check Out</button> 
        </div>
    )
}