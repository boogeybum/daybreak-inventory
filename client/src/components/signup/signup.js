import React, { Component } from "react";
import { Input, TextArea, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";
import "./Signup.css";


class Home extends Component {
    // setting a state representing user details
    state = {
        //users: [],
        name: "",
        role: "",
        email: "",
        password: "",
        res: ""
    };

    // componentDidMount() {
    //     this.loadUsers();
    // }

    // loadUsers = () => {
    //     API.getUser()
    //         .then(res =>
    //             this.setState({ users: res.data })
    //         )
    //         .catch(err => console.log(err));
    // };
    signup = (UserData) => {
        API.signup(UserData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    signin = (userData) => {
        API.signin(userData)
        .then(res =>{
            console.log("sign in successfull");

        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password && this.state.name && this.state.role && this.state.email) {
            API.signup({
                name: this.state.name,
                role: this.state.role,
                email: this.state.email,
                password: this.state.password
            })
                .then(res =>{
                     console.log(res);
                    this.setState({name: "", email: "", password: "", role: "", res: res.data})
                    })

                .catch(err => console.log(err));
        }
    };
    handleLogin = event => {
        event.preventDefault ();
        if (this.state.password && this.state.email) {
            API.signin({
                email: this.state.email,
                password: this.state.password
            })
                .then(res =>{
                     console.log(res);
                    this.setState({email: "", password: ""});
                    window.location.replace("/dashboard")
                    })

                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div className="container homepage">
                <div className="row" id="home">
                    <div className="col-md-8 text-center" id="welcomeInfo">
                        <div id="info">
                            <h1 className="" id = "name">Daybreak Inventory System</h1>
                            <p className="lead" id = "slogan"><b>New open source inventory for small businesses</b></p>
                        </div>
                    </div>
                    <div className="col-md-4" id="register">
                        {/* Nav tab */}
                        <ul className="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#signup">Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#signin">Sign in</a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div id="signup" className="container tab-pane active">
                                {/* response after signup successfull */}
                                <h1>{this.state.res}</h1>
                                <Input
                                    name="name"
                                    value={this.state.name}
                                    id=""
                                    colSpecs=""
                                    onChange= {this.handleInputChange}
                                    placeholder="Enter your name"
                                    type="text"
                                    labelText="Names"
                                    required
                                />
                                <Input
                                    name="email"
                                    value= {this.state.email}
                                    id=""
                                    colSpecs=""
                                    onChange= {this.handleInputChange}
                                    placeholder="Email"
                                    type="email"
                                    labelText="Email"
                                    required
                                />
                                 <Input
                                    name="role"
                                    value= {this.state.role}
                                    id=""
                                    colSpecs=""
                                    onChange= {this.handleInputChange}
                                    placeholder="role"
                                    type="text"
                                    labelText="Your role / position"
                                />
                                <Input
                                    name="password"
                                    value={this.state.password}
                                    id=""
                                    colSpecs=""
                                    onChange= {this.handleInputChange}
                                    placeholder="Enter password"
                                    type="password"
                                    labelText="Password"
                                    required
                                />
                                <FormBtn
                                    type="submit"
                                    btnDetails="btn btn-success"
                                    disabled= {!(this.state.name && this.state.email && this.state.password)}
                                    onClick= {this.handleFormSubmit}
                                >Submit</FormBtn>

                            </div>
                            <div id="signin" className="container tab-pane fade">
                                <Input
                                    name="email"
                                    value={this.state.email}
                                    id=""
                                    colSpecs=""
                                    onChange= {this.handleInputChange}
                                    placeholder="Email"
                                    type="email"
                                    labelText="Enter your email"
                                    required
                                />
                                <Input
                                    name="password"
                                    value= {this.state.password}
                                    id=""
                                    colSpecs=""
                                    onChange= {this.handleInputChange}
                                    placeholder="Enter password"
                                    type="password"
                                    labelText="Password"
                                    required
                                />
                                <FormBtn
                                    type="submit"
                                    btnDetails="btn btn-success"
                                    disabled= {!(this.state.email && this.state.password)}
                                    onClick= {this.handleLogin}
                                >Login</FormBtn>
                            </div>
                        </div>
                    </div>
                </div>

                {/* button that toggles a form to add a new customer */}
                {/* <FormBtn data-toggle="collapse" data-target="#add-customer" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Customer <span style={{ paddingLeft: "10px" }}>+</span></FormBtn> */}

                {/* form to add a new customer */}
                {/* <div
                    id="add-customer"
                    className="collapse"
                > */}
                {/* <form>
                        <FormRow>
                            <Input name="firstname" colSpecs="form-group col-sm-4" placeholder="First Name (required)" id="title" labelText="First name" value={this.state.firstname}
                                onChange={this.handleInputChange} />
                            <Input name="lastname" placeholder="Last Name (required)" colSpecs="form-group col-sm-4" id="last-name" labelText="Last name" value={this.state.lastname}
                                onChange={this.handleInputChange} />
                            <Input name="email" placeholder="enter email" colSpecs="form-group col-sm-4" id="email" labelText="Email" type="email" value={this.state.email}
                                onChange={this.handleInputChange} />
                        </FormRow>
                        <Input name="address" placeholder="Street, City, State, Country (required)" colSpecs="form-group col-sm-12" id="address" labelText="Address" value={this.state.address}
                            onChange={this.handleInputChange} />
                        <Input name="phone" placeholder="phone (required)" colSpecs="form-group col-sm-12" id="phone" labelText="phone" value={this.state.phone}
                            onChange={this.handleInputChange} />
                        <FormBtn type="submit" btnDetails={"btn btn-success"}
                            disabled={!(this.state.firstname && this.state.lastname && this.state.email && this.state.address)}
                            onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form> */}
                {/* </div> */}
            </div>
        );
    }
}

export default Home;