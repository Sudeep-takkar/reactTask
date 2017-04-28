import React, { Component } from 'react';
import Dropdown from './Dropdown'
import Items from './Items';

class Header extends Component {
    constructor(){
        super();
        this.state = {
          search: []

        }
        // this.callApi();
    }

    callApi(){
        return fetch('https://demo9208377.mockable.io/results?q="'+this.refs.inputBox.value+'"',{
            method: 'get'
        })
        // return fetch('https://demo9208377.mockable.io/results?q="Iphone 7"',{
        //     method: 'get'
        // })
        .then((data) => {
            console.log(data);
            if(data.status === 200){
                this.setState({search : [
                  {
                    model: 'Apple Iphone 7',
                    color: 'Black',
                    seller: 'Flipkart',
                    price: '47999',
                    image: './image1.jpg',
                    storage: '32 Gb'
                  },
                    {
                      model: 'Apple Iphone 7S',
                      color: 'Grey',
                      seller: 'Flipkart',
                      price: '43999',
                      image: './image2.jpg',
                      storage: '16 Gb'
                    },
                    {
                      model: 'Apple Iphone 7 plus',
                      color: 'Black',
                      seller: 'eBay',
                      price: '57999',
                      image: './image3.jpg',
                      storage: '32 Gb'
                    },
                    {
                      model: 'Apple Iphone 7 S',
                      color: 'Black',
                      seller: 'Amazon India',
                      price: '47999',
                      image: './image4.jpg',
                      storage: '64 Gb'
                    },
                    {
                      model: 'Apple Iphone 6S',
                      color: 'Black',
                      seller: 'Flipkart',
                      price: '37999',
                      image: './image5.jpg',
                      storage: '128 Gb'
                    }
                ]});
            }else{
                this.setState({search : []});
            }
        });   
    }

    handleKeyPress(e) {
        // console.log(this.refs.inputBox.value);
        if (e.key === 'Enter') {
          // console.log();
          // <div className="col-md-2 visible-md visible-lg padding-0">
          //                       <img className="googleLogo" src="./googleLogo.png" alt="" />
          //                   </div>
          this.callApi();
        }
    }
    getInitialState() {
        return { showResults: true };
    }

    onClick(bool) {
        console.log(bool, typeof bool);
        if(bool){
            this.setState({ showResults: !this.state.showResults });
        }else{
            this.setState({ showResults: false} );   
        }
    
    }

    render() {

        return (
            <div>
                <div className="Header" value="false">
                    <div className="custom-container">
                        <div className="col-md-8 col-xs-12" onClick={this.onClick.bind(this, false)}>
                             <div className="col-md-2 visible-md visible-lg padding-0">
                                <img className="googleLogo1" src="./googleLogo.png" alt="" />
                            </div>
                            <div className="col-md-2 visible-sm visible-xs padding-0">
                                <img className="googleLogo2" src='./googleLogo.png' alt="" />
                            </div>

                            <div className="form-group has-feedback col-md-9 col-xs-10 col-xs-offset-1 padding-0">  
                                <input type="text" className="form-control custom-input" onKeyPress={this.handleKeyPress.bind(this)} ref="inputBox" />
                            </div>
                        </div>
                        <div className="col-md-4 visible-md visible-lg">
                            <div className="dropdown">
                                <img className="userIcon pull-right" src="./userLogo.jpg" alt="" onClick={this.onClick.bind(this, true)} />
                                { this.state.showResults ? <Dropdown /> : null }
                            </div>


                            <span className="glyphicon glyphicon-bell custom-color pull-right padding-horizontal-10 other-Icons" onClick={this.onClick.bind(this, false)}></span>
                            <span className="glyphicon glyphicon-th custom-color pull-right padding-horizontal-10 other-Icons" onClick={this.onClick.bind(this, false)}></span>
                        </div>
                    </div>
                </div>
                {
                    this.state.search.length > 0 &&
                    <h3> Shop For Iphone 7 on Google</h3> &&
                    <Items items={this.state.search}/>
                }
            </div>
        );
    }
}

export default Header;
