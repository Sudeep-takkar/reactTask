import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        //console.log(this.props);
        return (
        	<div className="Item">
	            <div className="col-md-2 col-sm-4 col-xs-6">
	                {this.props.items.model} - {this.props.items.price}

                    <div className="card">
                      
                    </div>
	            </div>
            </div>
        );
    }
}

export default ItemList;
