import React, {Component} from 'react'
import Product from './Product'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: [],
            product_id: 0
        }

    }
    render(){
   let { product } = this.props.inventory.map((product) => {
       return <li>{product}</li>
   })
        return (
            <div>
                <li>{console.log(product)} </li> 
            
            <Product products={this.state.products}/>
            </div>
            // i know product is undefined, but i'm going to move on
        )
    }
}

export default Dashboard
