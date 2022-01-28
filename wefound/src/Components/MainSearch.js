import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import '../styles/MainSearch.css'
import axios from 'axios'
import Login from "./Login";
import Products from "./Product";
import { Link, useLocation } from 'react-router-dom';



function MainSearch(prop){
    const [products, setProducts] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");
    const [filiterState, setFilterState] = useState({
            ais:false,
            csp:false,
            dth:false,
    })
    


    async function getProducts(event){
        event.preventDefault();

        const res = await axios.get(`http://localhost:8080/api/kroger/products?filter.locationId=01400943&filter.term=${searchTerm}`);
        setProducts(res.data.data.data);
    }
    

    const elements = products.map(data =>{

        function getUrl(){
            let url = data.images[0].sizes[0].size;
            
            for(let i = 0; i < data.images.length; i++){
                if(data.images[i].perspective === "front"){
                    let front = i
                    for(let j = 0; j < data.images[front].sizes.length; j++){
                        if(data.images[front].sizes[j].size === "large"){
                            url = data.images[front].sizes[j].url;
                        }// End of the if statment
                    }// End of the inner for loop
                }// End of the outer if statment
            }// End of the outer for loop

            return url;
        }
        
return (
        <div className="eachItem">
        
            <Link to={"/product"} state={{
                img:getUrl(),
                title: data.description,
                price:data.items[0].price.regular,
                promoPrice:data.items[0].price.promo,
                brand: data.brand,
                curbside:data.items[0].curbside,
                delivery: data.items[0].delivery,
                inStore: data.items[0].inStore,
                shipToHome: data.items[0].shipToHome,
                size: data.items[0].size,
                width: data.itemInformation.width,
                depth: data.itemInformation.depth,
                fulfillment:data.items[0].fulfillment,
                height: data.itemInformation.height,
                wholeItem: data
            }}><img className="renderedImgs" src={getUrl()} alt="product"/></Link>
            <p>{data.description} </p>
            <p>${data.items[0].price.regular} ({data.items[0].size})</p>
       </div>)
    })


    function sortByPrice(event){
        if(event.target.value == "0"){
            let arr = products.sort(function (a, b) {
                return a.items[0].price.regular - b.items[0].price.regular
            })
            
            setProducts(arr);
        }

        if(event.target.value == "1"){
            let arr = products.sort(function (a, b) {
                return b.items[0].price.regular - a.items[0].price.regular
            })
            products = arr;

            setProducts(products);
        }
    }
    
    function isChecked(event){ 
        filiterState(prev =>({
            ...prev,
            [event.target.name]: event.target.checked
        }))
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


            <div>
            <form>
                <input type="checkbox" name="ais" onChange={isChecked}></input>
                <label>Available in Store</label><br/>
                <input type="checkbox" name="dth"></input>
                <label>Home delivery</label><br/>
                <input type="checkbox" name="csp"></input>
                <label>Curbside pickup</label>
            </form>
            </div>
        </div>

        <div className="renderedProducts">
            {elements}
        </div>
        </>
    )
}

export default MainSearch