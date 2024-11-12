import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-[#282c3f] py-4 px-8">
      <div className="flex items-center">
        <img className="w-16 h-auto" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="list-none flex gap-6 m-0 p-0">
          <li className="text-white font-medium text-lg cursor-pointer transition-colors duration-300 hover:text-[#f16522]">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="text-white font-medium text-lg cursor-pointer transition-colors duration-300 hover:text-[#f16522]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-medium text-lg cursor-pointer transition-colors duration-300 hover:text-[#f16522]">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-white font-medium text-lg cursor-pointer transition-colors duration-300 hover:text-[#f16522]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-white font-medium text-lg cursor-pointer transition-colors duration-300 hover:text-[#f16522]">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-white font-medium text-lg cursor-pointer transition-colors duration-300 hover:text-[#f16522]">
            <Link to="/cart">Cart ({cartItems.length} 🛒)</Link>
          </li>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer text-lg transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 text-white font-medium text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
