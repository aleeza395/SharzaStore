import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { token } = useContext(Shopcontext);

  return (
    <div>
      <div className="mx-20 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-t border-green-300 pt-5">
        <div className="ml-0 sm:ml-10">
          <img src="/assets/logo1.png" className="mb-5 w-12" alt="logo" />
          <p className="w-full md:w-2/3 text-green-900">
            We offer premium herbal skincare, nourishing haircare, and
            captivating fragrances crafted to enhance your natural beauty. Our
            mission is to provide high-quality products that bring confidence,
            wellness, and elegance to your daily self-care routine.
          </p>
        </div>
        <div>
          <p className="text-x1 font-medium mb-5 text-green-900">COMPANY</p>
          <ul className="flex flex-col gap-1 text-green-900">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
            <Link to="/orders">
              <li>Orders</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-x1 font-medium mb-5 text-green-900">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-green-900">
            <li>+92 336 6151096</li>
            <li>sharzastore@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-green-200" />
        <p className="py-5 text-sm text-center text-green-900">
          Copyright 2026@SharzaStore.com - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
