import React, { Component } from 'react';
import CustomerForm from '../components/CustomerForm.js';
class CustomerContainer extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    console.log('Customer Container props are - ', this.props)
    return (
      <div>
        <CustomerForm  />
      </div>
    );
  }
}

export default CustomerContainer;
