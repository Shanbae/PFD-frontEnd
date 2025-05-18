import React, { useState } from "react";
import images11 from "../images/finance.webp";

import { Link, useNavigate } from "react-router-dom";

import api from "../api";
import MainLayout from "./Dashboard/MainLayout";
import { toast } from "react-hot-toast";

const Loogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUserName = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z\s]+$/;
    if (regex.test(value)) {
      setUsername(value);
    }
    // else {
    //   setUsername("");
    // }
  };
  const handleLogin = async () => {
    try {
      const response = await api.post(
        // "https://localhost:7207/api/Login/Login",   //this only for localhost
        `${import.meta.env.VITE_REA}/api/Login/Login`,
        {
          username,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      console.log(response.data);
      console.log(response.status);

      if (response.status === 200) {
        toast.success("Use loggedin!!!");
        localStorage;
        navigate("/Dashboard");
      } else {
        toast.error("Invalid User !!!");
      }
    } catch (error) {
      console.error(
        toast.error("Invalid User !!!"),
        error.response ? error.response.data : error.message,
      );
    }
  };
  return (
    <>
      <div className="relative min-h-screen w-full bg-gradient-to-br">
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images12})` }}
        ></div> */}

        <div className="bg-opacity-50 absolute inset-0">
          <div>
            <header className="w-full shadow-2xl shadow-black">
              <div className="flex flex-1/2">
                <h5 className="mt-5 text-4xl text-amber-400 hover:text-white">
                  Welcome to Personal finance!
                </h5>
                <div className="flex flex-1 justify-end">
                  <button className="mt-6 mr-15 mb-6 rounded-2xl border-2 border-gray-200 p-3 text-white transition-all duration-700 ease-in-out hover:border-amber-400">
                    Get Started!!!
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className="bg-opacity-40 relative top-32 mx-auto flex h-screen flex-col justify-center rounded-3xl border-none sm:h-[300px] sm:w-[95%] md:h-[350px] md:w-[80%] md:flex-row lg:h-[200px] lg:w-[85%] xl:h-[400px] xl:w-[700px]">
          {/* <div className="rounded-l-3xl md:w-4/5">
             <img
              src={images11}
              alt="Finance Image"
              className="h-full w-full rounded-l-3xl"
            />
          </div>  */}

          <div className="w-fit rounded-3xl bg-transparent p-1 md:h-full md:w-[70%] md:border-[0.5px] md:border-amber-400">
            <h1 className="mt-10 mb-10 text-center align-middle text-4xl font-bold text-amber-400">
              Login
            </h1>
            <div className="container mt-5 h-10 w-full pl-15">
              {/* <label className="font-sans text-xl font-bold">UserName:</label> */}
              <input
                type="text"
                className="w-4/5 border-b-2 border-b-black text-xl text-white transition-colors duration-500 hover:border-amber-400 focus:outline-none"
                placeholder="UserName"
                onChange={handleUserName}
                value={username}
              ></input>
              {/* </div>
            <div className="container mt-7 h-10 w-full pl-15"> */}
              {/* <label className="font-sans text-xl font-bold">Password:</label> */}
              <input
                type="text"
                className="w-4/5 border-b-2 border-b-black pt-7 text-xl text-white transition-colors duration-500 hover:border-amber-400 focus:outline-none"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
            <div className="flex justify-end">
              <button
                className="mt-24 mr-20 rounded-sm border-1 border-black pt-1 pr-3 pb-1 pl-3 transition duration-300 ease-in-out hover:scale-105 hover:bg-amber-400 hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                onClick={() => handleLogin()}
              >
                LOGIN
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link
                to="/ForgotPassword"
                className="align-middle hover:text-amber-500"
              >
                Forget Password?
              </Link>

              <Link
                to="/Registration"
                className="mt-5 align-middle hover:text-amber-500"
              >
                Register Now?
              </Link>
              {/* <Link
                to="/dashboard"
                className="mt-5 align-middle hover:text-blue-600"
              >
                Dashboard
              </Link> */}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loogin;
