import React, { Component } from "react";
import { Input, FormBtn, FormRow } from "../form tools/form";
import API from "../../utils/API";

class InventoryitemForm extends Component {
    // setting a state representing inventoryitem details
    state = {
        inventoryitems: [],
        totalinstock: "",
        totalsales: "",
        price: "",
        LotId: "",
        ItemcategoryId: ""
    };

    componentDidMount() {
        this.loadInventoryitems();
    }

    loadInventoryitems = () => {
        API.getInventoryitems()
            .then(res =>
                this.setState({ inventoryitems: res.data })
            )
            .catch(err => console.log(err));
    };

    saveInventoryItem = (data) => {
        API.saveInventoryitem(data)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    addInventoryItem = (data) => {
        API.addInventoryitem(data)
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
        if (this.state.totalinstock && this.state.totalsales && this.state.price) {
            API.saveInventoryitem({
                totalinstock: this.state.totalinstock,
                totalsales: this.state.totalsales,
                price: this.state.price,
                LotId: this.state.LotId,
                ItemcategoryId: this.state.ItemcategoryId
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container inventoryitem">
                <h3 className="display-4">Inventory Items</h3>
                {/* button that toggles a form to add a new inventoryitem */}
                <FormBtn data-toggle="collapse" data-target="#add-inventoryitem" type="button" style={{ borderBottom: "solid", borderColor: "green" }}>Add Inventory Item <span style={{ paddingLeft: "10px" }}>+</span></FormBtn>

                {/* form to add a new inventoryitem */}
                <div
                    id="add-inventoryitem"
                    className="collapse"
                >
                    <form>
                        <FormRow>
                            <Input name="totalinstock" colspecs="form-group col-sm-4" placeholder="Total in Stock (required)" id="total" labeltext="Total in Stock" value={this.state.totalinstock}
                                onChange={this.handleInputChange} />
                            <Input name="totalsales" placeholder="Total Sales (required)" colspecs="form-group col-sm-4" id="last-name" labeltext="Total Sales" value={this.state.totalsales} disabled={true} />
                            <Input name="price" placeholder="Enter Price" colspecs="form-group col-sm-4" id="price" labeltext="Price" type="price" value={this.state.price}
                                onChange={this.handleInputChange} />
                        </FormRow>
                        <FormBtn type="submit" btndetails={"btn btn-success"}
                            disabled={!(this.state.totalinstock && this.state.totalsales && this.state.price)}
                            onClick={this.handleFormSubmit}>Submit</FormBtn>
                    </form>
                </div>
                
                {/* Table for existing inventoryitems in the database */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Total in Stock</th>
                            <th scope="col">Total Sales</th>
                            <th scope="col">Price</th>
                            <th scope="col">Lot</th>
                            <th scope="col">Item Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.inventoryitems.map((inventoryitem,index) =>(
                            <tr key={index}>
                                <th scope="row">{inventoryitem.id} </th>
                                <td>{inventoryitem.totalinstock}</td>
                                <td>{inventoryitem.totalsales}</td>
                                <td>{inventoryitem.price}</td>
                                <td>{inventoryitem.LotId}</td>
                                <td>{inventoryitem.ItemcategoryId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InventoryitemForm;