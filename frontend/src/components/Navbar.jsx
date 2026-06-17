import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import {
  FaMagnifyingGlass,
  FaUser,
  FaCartShopping,
  FaBars,
  FaCaretLeft,
} from "react-icons/fa6";

const Navbar = () => {
  const {
    showSearch,
    setShowSearch,
    getCartCount,
    token,
    setToken,
    navigate,
    setCartItems,
  } = useContext(Shopcontext);
  const [visible, setVisible] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <div className="border-b-2 border-green-100 w-full fixed flex items-center justify-around py-5 font-medium bg-white">
      <Link to="/home">
        <img src="/assets/logo1.png" className="w-12" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-green-900">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-green-500 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-green-500 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-green-500 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-green-500 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <FaMagnifyingGlass
          className="w-8 text-green-900 text-2xl cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <FaUser
            onClick={() => (token ? null : navigate("/login"))}
            className="w-8 text-green-900 text-2xl cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-green-700 text-green-900">
                Profile
              </p>
              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-green-700 text-green-900"
              >
                Orders
              </p>
              <p
                onClick={logout}
                className="cursor-pointer hover:text-green-700 text-green-900"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <FaCartShopping className="w-10 min-w-5 text-green-900 text-2xl" />
          <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-green-700 text-white aspect-square rounded-full text-[-8px]">
            {getCartCount()}
          </p>
        </Link>
        <FaBars
          onClick={() => setVisible(true)}
          className="w-10 cursor-pointer text-green-900 text-2xl sm:hidden"
          alt="menu"
        />
        <div
          className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? "w-full" : "w-0"}`}
        >
          <div className="flex flex-col text-green-900">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <FaCaretLeft className="h-4" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="bg-white py-2 pl-6 border"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="bg-white py-2 pl-6 border"
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="bg-white py-2 pl-6 border"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="bg-white py-2 pl-6 border"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
