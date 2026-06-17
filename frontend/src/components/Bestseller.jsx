import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Productitem from "./Productitem";
import Title from "./Title";

const Bestseller = () => {
  const { products } = useContext(Shopcontext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct);
  }, [products]);

  return (
    <div className="mx-5 lg:mx-10 my-10">
      <div className="text-center text-3x1 py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-green-900">
          Discover our most loved products, carefully selected by customers for
          their exceptional quality and results. From nourishing herbal skincare
          and revitalizing haircare essentials to captivating natural scents,
          these bestsellers have earned their place as customer favorites.
          Experience the perfect blend of nature, beauty, and self-care with
          products trusted by our community.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
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
  );
};

export default Bestseller;
