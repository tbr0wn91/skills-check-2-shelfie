import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventoryList: []
    
    }
    this.getAllProducts = this.getAllProducts.bind(this)
  }

  componentDidMount(){
    this.getAllProducts();
  }

  getAllProducts(){
    axios.get('/api/inventory/').then(res => {
      this.setState({
        products : res.data
      })
    })

  }
  


  render(){
    return (
      <div className="App">
        <Dashboard inventoryList={this.state.inventoryList}/>
        <Form getAllProducts={this.getAllProducts}/>
        <Header />

      </div>
    )
  }
}

export default App;
