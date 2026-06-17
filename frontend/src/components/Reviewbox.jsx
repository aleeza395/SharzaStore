import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";
import { Shopcontext } from "../context/Shopcontext";
import { toast } from "react-toastify";

const Reviewbox = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const { backendUrl } = useContext(Shopcontext);
  const [reviewData, setReviewData] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/review/get");

      if (response.data.success) {
        setReviewData(response.data.reviews);
      }
    } catch (error) {
      console.log("cannot fetch reviews");
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(backendUrl + "/api/review/add", {
        name,
        review,
      });

      if (response.data.success) {
        toast.success("Review added");
        setName("");
        setReview("");
        fetchReviews();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <Title text1={"CUSTOMER"} text2={"REVIEWS"} />
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {reviewData.slice(0, 7).map((item, index) => (
          <div
            className="border border-[#0080001c] shadow-md rounded-lg w-full m-5 p-5"
            key={index}
          >
            <b className="text-green-700">{item.name}</b>
            <p className="text-green-900">{item.review}</p>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
        <b className="text-green-700">Write your own review</b>
        <input
          className="w-full p-3 border border-green-200 outline-none focus:border-green-700 rounded"
          type="text"
          value={name}
          placeholder="Enter name here"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border border-green-200 outline-none focus:border-green-700 rounded"
          value={review}
          placeholder="Enter review here"
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <button
          className="bg-green-700 border rounded-lg border-green-700 px-8 py-4 my-6 text-sm hover:bg-green-900 hover:text-w transition-all duration-500 text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Reviewbox;
