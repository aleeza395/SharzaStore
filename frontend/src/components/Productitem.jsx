import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { Link } from "react-router-dom";

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(Shopcontext);
  return (
    <div>
      <Link className="text-green-900 cursor-pointer" to={`/product/${id}`}>
        <div className="flex flex-col items-center">
          <img
            className="w-[280px] h-[350px] rounded-lg shadow-md m-5 object-cover hover:scale-105 transition duration-300"
            src={image}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-center">{name}</p>
        <p className="text-sm font-semibold text-center">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
};

export default Productitem;
