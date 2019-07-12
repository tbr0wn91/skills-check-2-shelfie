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



    handleProductImage(productImage){
        this.setState({
            productImage: productImage
        });
    }

    handleProductName(productName){
        this.setState({
            productName: productName
        });
    }

    handleProductPrice(productPrice){
        this.setState({
            productPrice: productPrice
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