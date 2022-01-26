import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import '../styles/MainSearch.css'

function MainSearch(prop){
    const [products, setProducts] = useState([]);
    
    


    function getProducts(event){
        event.preventDefault();
        setProducts(dummyData.map(data =>
                <div className="eachItem">
                    <img className="renderedImgs" src={data.url}></img>
                    <h3>{data.name} ${data.price}</h3>
                    <p>{data.location}</p>

                </div>
            
            
        ))
        console.log(arr);
    }
    



    return(
        <>
        <div className="mainSearch" >
            <form className="searchSection" onSubmit={getProducts}>
                <input type="text" />
                <button>Search</button>
            </form>


            <select name="FilterByLocation">
                <option> 0 to 5 miles</option>
                <option> 5 to 10 miles</option>
                <option> 10 to 20 miles</option>
            </select>

            <select name="FilterByPrice">
                <option> $0.50 to $1.00</option>
                <option> $1.00 to $5.00</option>
                <option> $5.00 to $10.00</option>
            </select>

            <select name="Sorts">
                <option> low to high</option>
                <option> high to low</option>
            </select>
        </div>

        <div className="renderedProducts">
            {products}
        </div>
        </>
    )
}

export default MainSearch