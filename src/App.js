import React, { Component } from 'react';

import './App.css';
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: [{
        name: 'shirt',
        price: '$2',
        img: 'http://url'},
        {name: 'hat',
        price: '$4',
        img: 'http://url' } ],

        inventoryid: undefined

    }
this.componentDidMount = this.componentDidMount.bind(this)
    
  }
  componentDidMount(){
    axios.get('/api/inventory').then((res) => {
      this.setState({inventory: res.data})
     }) .catch(err => console.log(err))
    }

    handleInventory(){
      axios.get(`/api/inventory/${id}`).then((res) =>  {
        this.setState({inventoryid: res.data.id})
      })
    }
    
  
  render() {
    console.log(Dashboard)
    return (
      <div className="App">
      <Form />
     
    <Dashboard inventory={this.state.inventory}/>
      <Header />

      </div>
    );
  }
}



  




export default App;
