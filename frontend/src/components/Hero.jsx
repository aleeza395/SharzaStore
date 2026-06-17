import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full pt-24 min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex items-center justify-center py-10 lg:py-0">
        <div className="px-6 sm:px-10 lg:px-20 text-green-900 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p className="w-8 md:w-11 h-[3px] bg-green-700"></p>
            <p className="font-medium text-sm md:text-base">
              Nature's Finest Care
            </p>
          </div>

          <h1 className="prata-regular text-3xl md:text-4xl lg:text-5xl py-3 leading-relaxed">
            SHARZA STORE
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p className="font-semibold text-sm md:text-base">DISCOVER NOW</p>
            <p className="w-8 md:w-11 h-[3px] bg-green-700"></p>
          </div>

          <button className="bg-green-700 rounded-lg px-8 py-4 my-6 text-sm hover:bg-green-900 transition-all duration-500">
            <Link className="text-white font-semibold" to="/collection">
              Shop Now
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          className="w-full max-w-[750px] h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
          src="/assets/hero-section.jpg"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
