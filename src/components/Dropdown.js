import React, { Component } from 'react';

class DropDown extends Component {
    render() {
        //console.log(this.props);
        return (
        	<div className="Dropdown">
	        	<ul className="dropdown-menu pull-right">
	                <li><a href="#">HTML</a></li>
	                <li><a href="#">CSS</a></li>
	                <li><a href="#">JavaScript</a></li>
	            </ul>
            </div>
        );
    }
}

export default DropDown;
