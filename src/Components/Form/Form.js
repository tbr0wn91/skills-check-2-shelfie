import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            productImage: "",
            productName: "",
            productPrice: 0
            
        }
      
    }



    handleProductImage(value){
        this.setState({
            productImage: value
        });
    }

    handleProductName(value){
        this.setState({
            productName: value
        });
    }

    handleProductPrice(value){
        this.setState({
            productPrice: value
        });
    }

    handleCancel = () => {
        this.setState({
            productImage : "",
            productName : "",
            productPrice : 0
        })
        
    }

  

    render(){
        return (
            <div>
                Form Component
                <input onChange={(e) => this.handleProductImage(e.target.value)} value={this.state.productImage} type="text"/>
                <input onChange={(e) => this.handleProductName(e.target.value)} value={this.state.productName} type="text"/>
                <input onChange={(e) => this.handleProductPrice(e.target.value)} value={this.state.productPrice} type="number"/>
                <button>Add to Inventory</button>
                <button onClick={(e) => (this.handleCancel(e))}>Cancel</button>
            </div>
        )
    }
}