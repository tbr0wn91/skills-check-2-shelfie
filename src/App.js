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
  }

  componentDidMount(){
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
        <Form />
        <Header />

      </div>
    )
  }
}

export default App;
