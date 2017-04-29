import React, { Component } from 'react';

class DropDown extends Component {
    render() {
        //console.log(this.props);
        return (
        	<div className="Dropdown">
	        	<div className="dropdown-menu pull-right custom-dropdown">
                    <div className="yellow-part">This account is managed by <strong>xyz..</strong> 
                        <div className="font-size-smaller privacyButton">Learn more</div>
                    </div>
                    <div className="upper-part">
                        <div className="col-md-5">
                           <img className="userInnerImage" src="./userInnerImage.jpg" alt="" />
    	                   <div className="change-button">change</div>
                        </div>
                        <div className="col-md-7 userInfo">
                           <div className="font-size-smaller userName">Sudeep Takkar</div>
                           <div className="font-size-smaller email">Sudeep.takkar@gmail.com</div>
                           <div className="font-size-smaller privacyButton">Privacy</div>
                           <button type="button" className="my-account-btn font-size-smaller">MyAccount</button>
                        </div>
                    </div>    
                    <div className="lower-part">
                        <button type="button" className="pull-left font-size-smaller">Add Account</button>
                        <button type="button" className="pull-right font-size-smaller">Sign Out</button>
                    </div>
                     
                </div>
            </div>
        );
    }
}

export default DropDown;
