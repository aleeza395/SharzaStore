import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("skincare");
  const [bestseller, setBestseller] = useState(false);
  const [volume, setVolume] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("volume", volume);
      image && formData.append("image", image);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName("");
        setDescription("");
        setPrice("");
        setImage(false);
        setVolume("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3 pt-28"
    >
      <div>
        <p className="mb-2 font-semibold text-green-900">Upload image</p>
        <div className="flex gap-2">
          <label htmlFor="image">
            <img
              className="w-20 bg-white"
              src={!image ? "/assets/upload.webp" : URL.createObjectURL(image)}
              alt="upload area"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2 font-semibold text-green-900">Product name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2 font-semibold text-green-900">Product description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2 font-semibold text-green-900">Product category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-green-900 w-full px-3 py-2"
          >
            <option value="haircare">Haircare</option>
            <option value="skincare">Skincare</option>
            <option value="scents">Scents</option>
          </select>
        </div>

        <div>
          <p className="mb-2 font-semibold text-green-900">Product price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
          />
        </div>
      </div>

      <div>
        <p className="mb-2 font-semibold text-green-900">Product volume</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          onChange={(e) => setVolume(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          className="accent-green-700"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer w-5 ml-2" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="bg-green-700 border rounded-lg border-green-700 px-6 py-2 my-6 text-sm hover:bg-green-900 hover:text-w transition-all duration-500 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
