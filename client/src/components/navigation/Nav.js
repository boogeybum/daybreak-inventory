import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "../form tools/form";

function Nav() {
    return (
        <NavContainer>
            <nav className="Navsidebar">
                <Link className="NavLink active" to="/signup">Sign Up</Link>
                <Link className="NavLink" to="/dashboard">Dashboard</Link>
                <Link className="NavLink" to="/lots">Lots</Link>
                <Link className="NavLink" to="/itemcategories">Item Category</Link>
                {/* <Link className="NavLink" to="/inventory">Inventory</Link> */}
                <Link className="NavLink" to="/inventoryitems">Inventory Items</Link>
                <Link className="NavLink" to="/users">Users</Link>
                <Link className="NavLink" to="/customers">Customers</Link>
                <Link className="NavLink" to="/checkout">Checkout</Link>
                <Link className="NavLink" to="/logout">Logout</Link>
            </nav>
        </NavContainer>
    );
}

export default Nav;