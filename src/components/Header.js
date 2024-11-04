import {LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered"); 

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a Selector (hook)
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart ({cartItems.length} 🛒)</Link></li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;