import React, { useState, useEffect } from "react";
import dummyData from "../dummyData";
import '../styles/MainSearch.css'
import axios from 'axios'
import Login from "./Login";
import Products from "./Product";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";


function MainSearch(props){

    const productHistory = JSON.parse(sessionStorage.getItem("products"))
    const lastSearch = sessionStorage.getItem("searchTerm")

    const [products, setProducts] = useState(productHistory || []);
    const[searchTerm, setSearchTerm] = useState( lastSearch || "");
    const[firstRun, setFirstRun] = useState(true)
    const [filiterState, setFilterState] = useState({
            ais:false,
            csp:false,
            dth:false,
    })

    React.useEffect(function() {
        sessionStorage.setItem("products", JSON.stringify(products))
    }, [products])

    const credentials = JSON.parse(sessionStorage.getItem('credentials'))


    async function getProducts(event){
        event.preventDefault();

        sessionStorage.setItem("searchTerm", searchTerm)

        try {
            const res = await axios.get(`https://we-found-backend.herokuapp.com/api/kroger/products?filter.locationId=01400943&filter.term=${searchTerm}`, {
                headers: {
                    "Authorization" : `Bearer ${credentials.token}`
                }
            });
            setFirstRun(false)
            setProducts(res.data.data.data);
        } catch(error) {
            console.log(error)

        }

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
            <Navbar/>
            <div className="mainSearch">
                <form className="searchSection" onSubmit={getProducts}>
                    <input type="text" onChange={(event)=> setSearchTerm(event.target.value)} value={searchTerm}/>
                    <button>Search</button>
                </form>
                <div className="filters">
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
                <div className="filterFulfillment">
                        <label class="container">Available in Store<br></br>
                            <input className="checkbox" type="checkbox" name="ais" onChange={isChecked}></input>
                            <span class="checkmark"></span>
                        </label>
                        <label className="container">Home delivery<br></br>
                            <input className="checkbox" type="checkbox" name="dth"></input>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Curbside pickup<br></br>
                            <input type="checkbox" name="csp"></input>
                            <span className="checkmark"></span>
                        </label>
                </div>
            </div>
            {!credentials && <h1 className="errorMsg1">Only logged in users can search for products</h1>}
        <div className="renderedProducts">
            {elements.length > 0 || firstRun ? elements :
                <h1 className="errorMsg1">That search didn't match any products. Try another search.</h1>

            }
        </div>
        </>
    )
}

export default MainSearch