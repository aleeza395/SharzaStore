import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { useLocation } from "react-router-dom";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(Shopcontext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="pt-32 text-center bg-white">
      <div className="inline-flex items-center justify-center border border-green-200 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-green-900 flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search here"
        />
        <FaMagnifyingGlass className="text-green-700" />
      </div>
      <FaXmark
        onClick={() => setShowSearch(false)}
        className="inline cursor-pointer text-green-700"
      />
    </div>
  ) : null;
};

export default Searchbar;
