import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav className="Navsidebar">
            <Link className="NavLink" to="/lots">Lots</Link>
            <Link className="NavLink" to="/itemcategories">Item Category</Link>
            <Link className="NavLink" to="/inventory">Inventory</Link>
            <Link className="NavLink" to="/users">Users</Link>
            <Link className="NavLink" to="/customers">Customers</Link>
            <Link className="NavLink" to="/checkout">Checkout</Link>
            <Link className="NavLink" to="/logout">Logout</Link>
            <Link className="NavLink" to="/logout">Send Email</Link>
        </nav>
    );
}

export default Nav;