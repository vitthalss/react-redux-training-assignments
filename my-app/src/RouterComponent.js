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
             <Router className="center">
              <Links/>
                <Route exact path="/home" component={HomePageComponent}/>
                <Route path="/about" component={AboutPageComponent}/>
                <Route path="/service" component={ServicePageComponent}/>
                <Route path="/contact" component={ContactPageComponent}/>
            </Router>
    );
  }
}
export default RouterComponent;
