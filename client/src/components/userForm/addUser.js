import React, { Component } from 'react';
import { Input, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";


class UserForm extends Component {
    state = {
        Users: [],
        userid: "",
        name: "",
        role: "",
        email: "",
        passwrod: "",

    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUser()
            .then(res =>
                this.setState({ Users: res.data })
            )
            .catch(err => console.log(err));
    };
    saveUser = (UserData) => {
        API.saveUser(UserData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userid && this.state.name && this.state.role && this.state.email) {
            API.saveUser({
                userid: this.state.userid,
                name: this.state.name,
                role: this.state.role,
                email: this.state.email,
                password: this.state.password
            })
                .then(res =>{
                    this.loadUsers()
                     console.log(res)})

                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container Users">
                <h3 className="display-4">Users</h3>
                {/* button that toggles a form to add a new customer */}
                <FormBtn data-toggle="collapse" data-target="#add-user" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add User <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>

                {/* form to add a new customer */}
                <div
                    id="add-user"
                    className="collapse"
                >
                    <form>
                        <FormRow>
                            <Input name="userid" colspecs="form-group col-md-3" placeholder="userid (required)" id="title" labeltext="User id" value={this.state.userid}
                                onChange={this.handleInputChange} />
                            <Input name="name" placeholder="Name (required)" colspecs="form-group col-md-3" id="name" labeltext="Name" value={this.state.name}
                                onChange={this.handleInputChange} />
                            <Input name="role" placeholder="role (required)" colspecs="form-group col-md-3" id="role" labeltext="Role" value={this.state.role}
                                onChange={this.handleInputChange} />
                               </FormRow>
                               <Input name="email" placeholder="email(required)" colspecs="form-group col-md-3" id="email" labeltext="Email" value={this.state.email}
                            onChange={this.handleInputChange} />
                            <Input name="password" placeholder="password(required)" colspecs="form-group col-md-3" id="email" labeltext="Password" value={this.state.password}
                            onChange={this.handleInputChange} />

                        <FormBtn type="submit" btndetails={"btn btn-success"}
                      
                            onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form>
                </div>
                {
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">UserID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Users.map((Users,index) =>(
                            <tr key={index}>
                                <th scope="row">{Users.id}</th>
                                <td>{Users.userid}</td>
                                <td>{Users.name}</td>
                                <td>{Users.role}</td>
                                <td>{Users.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                }
            </div>
        );
    }
}

export default UserForm;

