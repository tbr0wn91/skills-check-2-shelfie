import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventoryList: [{
        name: "dress shoes",
        price: 25,
        img: 'https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'
      },
      {
        name: "dress shoes",
        price: 25,
        img: 'https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'
      },
      {
        name: "dress shoes",
        price: 25,
        img: 'https://s7d4.scene7.com/is/image/JCPenney/DP0511201717035641M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'
      }
    ]
    }
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
