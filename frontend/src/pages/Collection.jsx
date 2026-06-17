import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
import { FaChevronDown } from "react-icons/fa6";

const Collection = () => {
  const { products, search, showSearch } = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();

    if (sortType == "low-high") {
      setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
    } else if (sortType == "high-low") {
      setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
    } else {
      applyFilter();
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div
      className={`${showSearch ? "pt-5" : "pt-24"} flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-12 xl:px-20 gap-6 lg:gap-10`}
    >
      <div className="w-full lg:w-56 pt-12">
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-green-900 my-2 flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <FaChevronDown
            className={`h-3 sm:hidden ${showFilter ? "rotate-180" : ""}`}
          />
        </p>
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="text-green-900 mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-green-700">
            <p className="flex gap-2">
              <input
                className="w-3 accent-green-700"
                type="checkbox"
                value={"haircare"}
                onChange={toggleCategory}
              />{" "}
              Haircare
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 accent-green-700"
                type="checkbox"
                value={"skincare"}
                onChange={toggleCategory}
              />{" "}
              Skincare
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 accent-green-700"
                type="checkbox"
                value={"scents"}
                onChange={toggleCategory}
              />{" "}
              Scents
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 pt-0 lg:pt-12">
        <div className="flex justify-center lg:justify-end mb-4">
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="my-5 border text-green-900 border-green-400 text-sm px-2 accent-green-700 focus-none"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <Productitem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
