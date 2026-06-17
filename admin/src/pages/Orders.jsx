import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { FaBox } from "react-icons/fa6";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const paymentHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/payment",
        { orderId, payment: event.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="pt-28">
      <h3 className="font-semibold text-lg text-green-700">Orders</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className={`${order.paymentMethod === "easypaisa" ? "lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]" : "lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr]"} grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-[#0080001c] p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-green-900`}
            key={index}
          >
            <FaBox className="text-lg text-green-900" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} X {item.quantity} <span>{item.volume}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} X {item.quantity} <span>{item.volume}</span>
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{`${order.address.firstName} ${order.address.lastName}`}</p>
              <div>
                <p>{`${order.address.street}, ${order.address.city}, ${order.address.state}`}</p>
              </div>
              <p>{`${order.address.phone}`}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                Items: {order.items.length}
              </p>
              <p className="mt-3">Method: {order.paymentMethod}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            {order.paymentMethod === "easypaisa" && (
              <div>
                <p>
                  Transaction ID:{" "}
                  <b className="text-green-700 font-semibold">
                    {order.transactionID}
                  </b>
                </p>
                <select
                  onChange={(event) => paymentHandler(event, order._id)}
                  value={order.payment}
                  className="p-2 font-semibold my-3"
                >
                  <option value="false">Not done</option>
                  <option value="true">Done</option>
                </select>
              </div>
            )}
            <p className="text-sm sm:text-[15px]">
              {currency} {order.amount}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Order placed">Order placed</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
