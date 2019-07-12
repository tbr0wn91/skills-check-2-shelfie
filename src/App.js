import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }


  render(){
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />

      </div>
    )
  }
}

export default App;
