import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-green-900">
        {text1} <span className="text-green-900 font-medium"></span>
      </p>
      <p className="text-green-700">{text2}</p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-green-700"></p>
    </div>
  );
};

export default Title;
