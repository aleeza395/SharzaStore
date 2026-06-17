import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";

const Carttotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(Shopcontext);

  return (
    <div className="w-full">
      <div>
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="text-green-900">Subtotal</p>
          <p className="text-green-700">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr className="border-green-200" />
        <div className="flex justify-between">
          <p className="text-green-900">Shipping fee</p>
          <p className="text-green-700">
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr className="border-green-200" />
        <div className="flex justify-between">
          <b className="text-green-900">Total</b>
          <b className="text-green-700">
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Carttotal;
