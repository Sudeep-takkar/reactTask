import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        //console.log(this.props);
        return (
        	<div className="Item">
	            <li>
	                {this.props.items.model} - {this.props.items.price}
	            </li>
            </div>
        );
    }
}

export default ItemList;
