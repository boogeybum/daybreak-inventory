/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
// eslint-disable-next-line
import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  
  render() {
    
    return (

      <div className="Login">
      <div className="Login__Aside"></div>
      <div className="Login__Form">
      <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">Sign In</a>
          <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
          </div>

          
          <div className="FormTitle">  
          <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#" 
            className="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</a>
        </div>



        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" 
              placeholder="Enter you full name" name="name" />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" 
              placeholder="Enter your password" name="password" />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" className="FormField__Input" 
              placeholder="Enter your email" name="email" />
            </div>


            <div className="FormField">
          <label className="FormField___CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agreed all 
            statments in <a href="" className="FormField___TermsLink"> terms of service</a>
          </label>

            </div>
          
           <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <a href="#"
            className="FormField__Link">I'm already a member</a>
          </div>
          
        </form>
    

        </div>

        
        </div>

      </div>
    
    );
  }
}   
export default Login;
