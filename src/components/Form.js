import React, {Component } from 'react'



class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            imgUrl: " ",
            product: [],
            price: 6
        }
        this.handleUrl = this.handleUrl.bind(this)
        this.handleProducts = this.handleProducts.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleUrl(value){
       this.setState({ imgUrl: value})
    }

    handleProducts(value){
        this.setState({ product: value})
    }

    handlePrice(value){
        this.setState({price: value})
    }

    handleCancel(){
        this.setState({
            props: false
        })
    }

    render(){
        return (
            <div className='form'>
            <form>
                <img src=""></img>
               <br></br>
               Image URL:    
               <input onChange={(e) => this.handleUrl(e.target.value)}/>
               Product Name: 
               <input   onChange={(e) => this.handleProducts(e.target.value)}/>
               <br></br>
               Price:       
                <input onChange={(e) => this.handlePrice(e.target.value)}/>
                
                <button onClick={()=> { this.handleCancel(this.state.props)}}>Cancel</button>
                <button onClick={this.props.inventory}>Add To Inventory</button>
            
            </form>
          </div>
        )
    }
}

export default Form