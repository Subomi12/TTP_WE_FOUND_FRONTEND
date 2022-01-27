import React, {useState} from "react";
import axios from 'axios'
import dummyData from "../dummyData";


function Products(prop){
    const [products, setProducts] = useState([]);

    // useEffect(()=>{
    //     axios.get(`https://api/kroger/products?filter.term=${prop.searchTerm}&filter.location=01400376`)
    //     .then((res) => res)
    // }, [])

    setProducts(dummyData.map(data =>
        <div className="eachItem">
            <img className="renderedImgs" src={data.url} alt="product"/>
            <h3>{data.name} ${data.price}</h3>
            <p>{data.location}</p>
        </div>))


    return(
        <div className="renderedProducts">
            {products}
        </div>
    )
}

export default Products