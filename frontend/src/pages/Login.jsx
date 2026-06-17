import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(Shopcontext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Signup") {
        if (password !== confirmpassword) {
          toast.error("Confirm password is not same as password");
        } else {
          const response = await axios.post(backendUrl + "/api/user/register", {
            name,
            email,
            password,
          });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
          } else {
            toast.error(response.data.message);
          }
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mx-30 flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl text-green-900">{currentState}</p>
        <hr className="border-none h-[2px] w-8 bg-green-700" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-3 py-2 border border-green-300 outline-none focus:border-green-700"
          placeholder="Enter name"
          required
        />
      )}
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-2 border border-green-300 outline-none focus:border-green-700"
        placeholder="Enter email"
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-2 border border-green-300 outline-none focus:border-green-700"
        placeholder="Enter password"
        required
      />
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="password"
          onChange={(e) => setConfirmpassword(e.target.value)}
          value={confirmpassword}
          className="w-full px-3 py-2 border border-green-300 outline-none focus:border-green-700"
          placeholder="Confirm password"
          required
        />
      )}
      <div className="w-full flex text-sm mt-5">
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Signup")}
            className="cursor-pointer text-green-700"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-green-700"
          >
            Go to login
          </p>
        )}
      </div>
      <button className="bg-green-700 border rounded-lg border-green-700 px-8 py-4 my-6 text-sm hover:bg-green-900 hover:text-w transition-all duration-500 text-white">
        {currentState === "Login" ? "LOGIN" : "SIGNUP"}
      </button>
    </form>
  );
};

export default Login;
