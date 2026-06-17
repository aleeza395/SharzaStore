import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import Relatedproducts from "../components/Relatedproducts";
import Title from "../components/Title";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(Shopcontext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState();
  const { currency } = useContext(Shopcontext);

  const fetchData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return productData ? (
    <div className="mx-8 lg:mx-20 pt-32 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        <div>
          <img className="w-96 rounded-lg text-green-900" src={image} />
        </div>
        <div className="flex flex-col justify-around gap-5 w-[18rem] lg:w-[50rem]">
          <div>
            <h1 className="font-semibold text-xl text-green-900">
              {productData.name}
            </h1>
            <p className="text-lg text-green-900 font-semibold">
              {productData.volume}
            </p>
          </div>
          <p className="text-lg text-green-700 font-semibold">
            {currency}
            {productData.price}
          </p>
          <p className="text-green-900 overflow-none">
            {productData.description}
          </p>
          <button
            onClick={() => addToCart(productData._id, productData.volume)}
            className="w-40 bg-green-700 text-white rounded-lg border-green-700 px-8 py-4 my-6 text-sm hover:bg-green-900 hover:text-w transition-all duration-500"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-green-400" />
          <div className="text-sm text-green-900 mt-5 flex flex-col gap-1">
            <p>Made with carefully selected ingredients</p>
            <p>Suitable for everyday use</p>
            <p>Cash on delivery available</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex text-green-700">
          <p className="border border-green-200 px-5 py-3 text-sm">
            Description
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-green-200 p-6 text-sm text-green-900">
          <p>
            Inspired by nature, our products are formulated with botanical
            ingredients known for their nourishing and revitalizing properties.
            Each item is carefully developed to provide gentle yet effective
            care for your skin, hair, and overall well-being.
          </p>
          <p>
            We believe beauty should be simple, natural, and accessible. That's
            why our collection focuses on quality ingredients, customer
            satisfaction, and products that fit seamlessly into your everyday
            self-care routine.
          </p>
        </div>
      </div>

      <Relatedproducts category={productData.category} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
