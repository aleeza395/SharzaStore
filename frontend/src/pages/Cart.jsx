import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import Carttotal from "../components/Carttotal";
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(Shopcontext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              volume: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="mx-8 lg:mx-20 pt-32">
      <div className="mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="text-green-900 flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image}
                  alt="product-image"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div>
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="py-2">{item.volume}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.volume,
                        Number(e.target.value),
                      )
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-green-700"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <FaTrash
                onClick={() => updateQuantity(item._id, item.volume, 0)}
                className="cursor-pointer text-xl text-green-700 hover:text-green-900"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <Carttotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/placeorder")}
              className="text-white bg-green-700 border rounded-lg border-green-700 px-8 py-4 my-6 text-sm hover:bg-green-900 hover:text-w transition-all duration-500"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
