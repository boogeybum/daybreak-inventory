import React, { Component } from "react";
import { Input, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";

class ItemCategoryForm extends Component {
    // setting a state representing itemCategory details
    state = {
        itemCategories: [],
        description: ""
    };

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = () => {
        API.getItemCategories()
            .then(res =>
                this.setState({ itemCategories: res.data })
            )
            .catch(err => console.log(err));
    };

    addCategoryToDB = (itemCategoryData) => {
        API.addCategoryToDB(itemCategoryData)
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

    handleSubmitClick = event => {
        event.preventDefault();
        if (this.state.description) {
            API.addCategoryToDB({
                description: this.state.description
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container categories">
                <h3 className="display-4">Item Category</h3>
                {/* button that toggles a form to add a new category */}
                <FormBtn data-toggle="collapse" data-target="#add-category" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Category <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>
                
                {/* form to add a new category */}
                <div
                    id="add-category"
                    className="collapse"
                >
                    <form id="itemcategories">
                        <FormRow>
                        <Input name='itemcategory' placeholder='Item Category (required)' colSpecs='form-group col-sm-4'
                        id='item-category' labelText='Enter item category' value={this.state.description}
                          onChange={this.handleInputChange} />
                        
                            
                        </FormRow>
                        <FormBtn type="submit" btnDetails={"btn btn-success"}
                            disabled={!(this.state.description)}
                            onClick={this.handleSubmitClick}>Submit</FormBtn>
                    </form>
                </div>
                
                {/* Table for existing itemCategories in the database */}
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.itemCategories.map((itemCategory, index) =>(
                            <tr key={index}>
                                <th scope="row">{itemCategory.id}</th>
                                <td>{itemCategory.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
            </div>
        );
    }
}

export default ItemCategoryForm;