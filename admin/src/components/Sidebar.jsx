import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaList, FaBox } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 pt-28 border-green-100">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-green-200 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <FaPlus className="text-lg text-green-700" />
          <p className="text-green-900 hidden md:block">Add item</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-green-200 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <FaList className="text-md text-green-700" />
          <p className="text-green-900 hidden md:block">List items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-green-200 border-r-0 px-3 py-2 rounded-l"
          to="/orders"
        >
          <FaBox className="text-md text-green-700" />
          <p className="text-green-900 hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
