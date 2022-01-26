import React, {Component} from 'react'


class HomePage extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: '',
            pricerange: ''
        }
    }
    
    handleProductChange(Event){
        this.setState({
            products: Event.target.value
        })
    }


    handlePriceRangeChange(Event){
        this.setState({
            pricerange: Event.target.value
        })
    }

    render(){
        return(
            <form>
               <label>Search here: </label>
                <input 
                type = "text" 
                placeholder = "What are you craving today"
                value = {this.state.products}
                onChange = {this.handleProductChange}/>
                        

                <div>
                    <label>Price Range</label>
                    <select value = {this.state.pricerange} onChange = {this.handlePriceRangeChange}>
                        <option value = "Price range">$5-$10</option>
                        <option value = "Price range">$11-$15</option>
                        <option value = "Price range">$16-$20</option>
                        <option value = "Price range">$21-$25</option>
                        <option value = "Price range">$26-$30</option>
                    </select>
                </div>

                
                <button type = "submit">Search</button>
             </form>
         )
    }
}
export default HomePage




// function HomePage(){

//     return(
//         <form>
//             <label>Search here: </label>
//             <input type = "text" placeholder = "What are you craving today"/>
            
//             <button type = "submit">Search</button>
//         </form>
//     )
// }
// export default HomePage