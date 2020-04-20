import React, { Component } from 'react';
import Links from './Links';
import HomePageComponent from './HomePageComponent';
import AboutPageComponent from './AboutPageComponent';
import ServicePageComponent from './ServicePageComponent';
import ContactPageComponent from './ContactPageComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class RouterComponent extends Component {
  render() {
    return (
             <Router>
              <Links/>
              <Route exact path="/home" Component={HomePageComponent}/>
              <Route path="/about" Component={AboutPageComponent}/>
              <Route path="/service" Component={ServicePageComponent}/>
              <Route path="/contact" Component={ContactPageComponent}/>
            </Router>
    );
  }
}
export default RouterComponent;
