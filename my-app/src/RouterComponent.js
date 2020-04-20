import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const HomePageComponent = () => {<h1>Home Page</h1>}
const AboutPageComponent = () => {<h1>About Page</h1>}
const ServicePageComponent = () => {<h1>Service Page</h1>}
const ContactPageComponent = () => {<h1>Contact Page</h1>}

const Links = () => {
          <div>         
              <NavLink activeClassName="selected" to="/home">Home</NavLink> | 
              <NavLink activeClassName="selected" to="/about">About</NavLink> | 
              <NavLink activeClassName="selected" to="/service">Service</NavLink> | 
              <NavLink activeClassName="selected" to="/contact">Contact</NavLink> 
          </div>
}
const RouterComponent = () => {
             <Router>
              <Links/>
              <Route exact path="/home" Component={HomePageComponent}/>
              <Route path="/about" Component={AboutPageComponent}/>
              <Route path="/service" Component={ServicePageComponent}/>
              <Route path="/contact" Component={ContactPageComponent}/>
            </Router>
}

ReactDOM.render(
      <section> <RouterComponent/> </section>,
       document.getElementById('root')
);
