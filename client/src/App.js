import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LotsForm from "./components/lots/lotAdd";
import ItemCategoryForm from "./components/categoryForm/itemCategoryForm";
// import InventoryForm from "./components";
import UserForm from "./components/userForm/addUser";
import CustomerForm from "./components/customers/CustomerForm";
import InventoryItemForm from "./components/inventoryitem/InventoryItemForm";
// import CheckoutForm from "./components";
// import { FormBtn } from "./components/form tools/form";
import Header from "./components/navigation/Header";
import Nav from "./components/navigation/Nav";
import Signup from "./components/signup/signup"
import Dashboard from "./components/dashboard/Dashboard"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-flex">
          <Header />
          <div className="row">
          <Nav />
          <Switch>
            <Route exact path="/" component={Signup}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/lots" component={LotsForm}/>
            <Route exact path="/itemcategories" component={ItemCategoryForm}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/users" component={UserForm}/>
            <Route exact path="/customers" component={CustomerForm}/>
            <Route exact path="/inventoryitems" component={InventoryItemForm}/>
            
            
            {/* <Route exact path="/checkout" component={CheckoutForm}/> */}
          </Switch>
          </div>
          {/* <div id ="App">
            <FormBtn data-toggle = "collapse" data-target = "#add-customer" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Customer <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
            <CustomerForm />
            <br></br>
            
            <FormBtn data-toggle = "collapse" data-target = "#add-category" type = "button" style = {{borderBottom: "solid", borderColor: "green"}}>Add Item Category <span style = {{paddingLeft: "10px"}}>+</span></FormBtn>
            <CategoryForm />
            <br></br> 
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
