import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render(){

       const inventoryToDisplay = this.props.inventoryList.map(inventory => {
            return <div><Product></Product></div>
        })
        return (
            <div>
                Dashboard 
                <Product />
                {inventoryToDisplay}
                
            </div>
        )
    }
}