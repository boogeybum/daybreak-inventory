import React, { Component } from 'react';
// import Home from "./components/signup/signup";
// import App from "./App";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// this is the homepage to render when the page opens

class View extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className = "container col-md-4">
                    <div className="jumbotron rounded-pill text-center border-success">
                        <h1 className="display-4"><a href="/lots">Lots</a></h1>
                    </div>
                    </div>
                    <div className = "container col-md-4">
                    <div className="jumbotron rounded-pill text-center">
                        <h1 className="display-4"><a href="/inventoryItems">Inventory Items</a></h1>
                    </div>
                    </div>
                    <div className = "container col-md-4">
                    <div className="jumbotron rounded-pill text-center">
                        <h1 className="display-4"><a href="/users">Users</a></h1>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className = "container col-md-4">
                    <div className="jumbotron rounded-pill text-center">
                        <h1 className="display-4"><a href="/customers">Customers</a></h1>
                    </div>
                    </div>
                    <div className = "container col-md-4">
                    <div className="jumbotron rounded-pill text-center">
                        <h1 className="display-4"><a href="/Orders">Orders</a></h1>
                    </div>
                    </div>
                    <div className = "container col-md-4">
                    <div className="jumbotron rounded-pill text-center">
                        <h1 className="display-4"><a href="/breakeven">Break-even Analysis</a></h1>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;