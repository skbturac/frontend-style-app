import React, { Component } from 'react';
import StylistContainer from '../containers/StylistContainer.js';
import CustomerContainer from '../containers/CustomerContainer.js';

const endpoint = `customers`
const apiURL = `http://localhost:3000/${endpoint}`
// const endpoint = `stylists`
// const endpoint = `locations`
// const endpoint = `service`
// const endpoint = `menus`
// const apiURL = `http://localhost:3000/customers`
class AppContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      database: {
      }
    }
  }
  componentDidMount(){
    fetch(apiURL,{
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Before fetch --', data);
        this.setState({database: data})
        console.log('After fetch --', data);
      })
  }

  render() {
    return (
      <div>
        <StylistContainer className='stylist-container' />
        <CustomerContainer className='customer-container' customers={this.state} />
      </div>
    );
  }
}

export default AppContainer;
