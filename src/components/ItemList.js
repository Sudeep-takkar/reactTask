import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        //console.log(this.props);
        return (
        	<div className="Item">
	            <div className="col-md-2 col-sm-4 col-xs-6">

                    <div className="card">
                      <img className="productImage" src={this.props.items.image} alt="" />
                      <div className="mainDetails">{this.props.items.model}({this.props.items.color},{this.props.items.storage})</div>
                      <div><strong>&#8377;{this.props.items.price}</strong> </div>
                      <div className="sellerInfo">{this.props.items.seller}</div>
                    </div>
	            </div>
            </div>
        );
    }
}

export default ItemList;
