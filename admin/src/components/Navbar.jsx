import React from "react";

const Navbar = ({ setToken }) => {
  return (
    <div className="fixed w-full bg-white flex items-center py-1 px-[4%] justify-between border-b border-green-200">
      <img className="m-5 w-12" src="/assets/logo1.png" alt="logo" />
      <button
        onClick={() => {
          setToken("");
        }}
        className="bg-green-700 border rounded-lg border-green-700 px-5 py-2 my-6 text-sm hover:bg-green-900 hover:text-w transition-all duration-500 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
