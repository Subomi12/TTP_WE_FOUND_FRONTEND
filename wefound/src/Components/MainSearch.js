import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import '../styles/MainSearch.css'
import axios from 'axios'
import Login from "./Login";
import Products from "./Products";

function MainSearch(prop){
    const [products, setProducts] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");
    //const [filiterState, setFilterState] = 


    async function getProducts(event){
        event.preventDefault();
        const res = await axios.get(`http://localhost:8080/api/kroger/products?filter.locationId=01400943&filter.term=${searchTerm}`);
        setProducts(res.data.data.data);
    }

    const elements = products.map(data =>
        <div className="eachItem">
            <img className="renderedImgs" src={data.images[0].sizes[1].url} alt="product"/>
           <p>{data.description} </p>
           <p>{data.items[0].size} ${data.items[0].price.regular}</p>
       </div>
       )

    function sortByPrice(event){
        // if(event.target.value == "0"){
        //     console.log("here")
        //     let arr = products.sort(function (a, b) {
        //         return a.items[0].price.regular - b.items[0].price.regular
        //     })

        //     setProducts(arr);
        // }
    }
    
    //Rendering to the page
    return(
        <>
        <div className="mainSearch">
            <form className="searchSection" onSubmit={getProducts}>
                <input type="text" onChange={(event)=> setSearchTerm(event.target.value)} value={searchTerm}/>
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

            <select name="Sorts" onChange={sortByPrice}>
                <option value = "0"> low to high</option>
                <option value = "1"> high to low</option>
            </select>
        </div>

        <div className="renderedProducts">
            {elements}
        </div>
        </>
    )
}

export default MainSearch