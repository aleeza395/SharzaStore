import React, { useContext, useState } from "react";
import Title from "../components/Title";
import Carttotal from "../components/Carttotal";
import { Shopcontext } from "../context/Shopcontext";
import axios from "axios";
import { toast } from "react-toastify";
import Accountdetails from "../components/Accountdetails";

const Placeorder = () => {
  const [method, setMethod] = useState("cod");
  const [transactionID, setTransactionID] = useState("");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(Shopcontext);
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormdata((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items),
            );

            if (itemInfo) {
              itemInfo.volume = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formdata,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        payment: false,
        paymentMethod: method,
        transactionID,
      };

      if (method === "cod") {
        const response = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { token } },
        );
        if (response.data.success) {
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/order/easypaisa",
          orderData,
          { headers: { token } },
        );
        if (response.data.success) {
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mx-8 lg:mx-20 flex flex-col sm:flex-row justify-between gap-4 sm:pt-14 min-h-[80vh]"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] pt-32 lg:pt-20">
        <div className="text-xl sm:text-2xl mb-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formdata.firstName}
            type="text"
            className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formdata.lastName}
            type="text"
            className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="email"
          value={formdata.email}
          type="email"
          className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
          placeholder="Enter Email"
          required
        />
        <input
          onChange={onChangeHandler}
          name="street"
          value={formdata.street}
          type="text"
          className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
          required
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formdata.city}
            type="text"
            className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
            placeholder="City"
            required
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formdata.state}
            type="text"
            className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formdata.zipcode}
            type="number"
            className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
            placeholder="Zipcode"
            required
          />
          <input
            onChange={onChangeHandler}
            name="phone"
            value={formdata.phone}
            type="number"
            className="border border-green-400 focus:border-green-700 outline-none rounded py-1.5 px-3.5 w-full"
            placeholder="Phone"
            required
          />
        </div>
      </div>

      <div className="mt-8 pt-40">
        <div className="mt-8 min-w-80">
          <Carttotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("easypaisa")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "easypaisa" ? "bg-green-700" : ""}`}
              ></p>
              <p className="text-green-900 text-sm font-medium mx-4">
                EASYPAISA
              </p>
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-700" : ""}`}
              ></p>
              <p className="text-green-900 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          {method === "easypaisa" && (
            <div className="my-5 p-2">
              <Accountdetails />
              <div className="w-full flex flex-col gap-6 my-8">
                <p className="text-sm text-green-900">
                  Make the payment and enter the{" "}
                  <b className="text-green-700">Transaction ID</b> below
                </p>
                <input
                  className="w-full p-3 border border-green-400 rounded outline-none focus:border-green-700"
                  type="text"
                  value={transactionID}
                  onChange={(e) => setTransactionID(e.target.value)}
                  placeholder="Enter transaction ID here"
                  required
                />
              </div>
            </div>
          )}

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-green-700 border rounded-lg border-green-700 px-8 py-4 my-6 text-white text-sm hover:bg-green-900 hover:text-w transition-all duration-500"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
