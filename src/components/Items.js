import React, { Component } from 'react';
import ItemList from './ItemList';

class Items extends Component {
    render() {
        let itemList;
        // console.log(this.props.searchs)
        if(this.props.items){
            console.log(this.props);
            itemList = this.props.items.map(search => {
                // console.log(search);
                return(
                    <ItemList key={search.model} items={search} />
                );
            });
        }
        return (
            <div className="Items">
                {itemList}
            </div>
        );
    }
}

export default Items;
