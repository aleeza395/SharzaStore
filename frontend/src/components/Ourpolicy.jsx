import React from "react";
import { FaTruckFast, FaLeaf, FaHeadset } from "react-icons/fa6";

const Ourpolicy = () => {
  return (
    <div className="mx-10 flex flex-col sm:flex-row justify-around gap-20 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-green-900">
      <div className="m-3">
        <FaTruckFast className="text-5xl m-auto mb-5" />
        <p className="font-semibold text-lg">Fast & Reliable Delivery</p>
        <p className="text-green-900">
          Enjoy quick and secure delivery on every order, ensuring your favorite
          beauty essentials reach your doorstep safely and on time.
        </p>
      </div>
      <div className="m-3">
        <FaLeaf className="text-5xl m-auto mb-5" />
        <p className="font-semibold text-lg">Natural Ingredients</p>
        <p className="text-green-900">
          Our products are crafted with carefully selected botanical ingredients
          to nourish your skin, strengthen your hair, and enhance your natural
          beauty.
        </p>
      </div>
      <div className="m-3">
        <FaHeadset className="text-5xl m-auto mb-5" />
        <p className="font-semibold text-lg">Dedicated Support</p>
        <p className="text-green-900">
          Our team is always ready to assist you with product recommendations,
          order inquiries, and any questions about your self-care journey.
        </p>
      </div>
    </div>
  );
};

export default Ourpolicy;
