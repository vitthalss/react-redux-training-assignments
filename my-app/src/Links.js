import React, { Component } from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';

class Links extends Component {
  render() {
    return (
      <div  className="center">         
              <NavLink activeClassName="selected" to="/home">Home</NavLink> | 
              <NavLink activeClassName="selected" to="/about">About</NavLink> | 
              <NavLink activeClassName="selected" to="/service">Service</NavLink> | 
              <NavLink activeClassName="selected" to="/contact">Contact</NavLink> 
     </div>
    );
  }
}
export default Links;
