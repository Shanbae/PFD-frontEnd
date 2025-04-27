import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import api from "../api";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const RegistrationCred = () => {
  const [name, setName] = useState("");
  const [valid, setValid] = useState(null);
  const [dob, setdob] = useState("");

  const [email, setEmail] = useState("");
  const [emailvalid, setEmailValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordvalid, setPasswordValid] = useState(null);

  const handleAddUser = async () => {
    try {
      const response = await api.post(
        "https://localhost:7207/api/Registration/AddUser",
        {
          name,
          dob,
          email,
          password,
        },
      );
      console.log(response.data);
      toast.success("Registration succeed!!!");
    } catch (error) {
      console.error(
        toast.error("Registration failed!!!"),
        error.response ? error.response.data : error.message,
      );
    }
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    const getLetter = value.replace(/[0-9]/g, "");
    setName(getLetter);
    const onlyLettersRegex = /^[A-Za-z\s]+$/; // Allow letters and spaces

    if (onlyLettersRegex.test(value) == false || value === "") {
      toast.error("Invalid Name!!!");
    }
  };
  const handleValid = () => {
    const onlyLetters = /^[A-Za-z\s]+$/;

    name == "" ? setValid(false) : setValid(onlyLetters.test(name));
  };
  const handleEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
    if (emailRegex.test(email) === false) {
      toast.error("Invalid Email!!!");
    }
  };
  const handlePassword = () => {
    password !== "" && confirmPassword !== "" && password === confirmPassword
      ? setPasswordValid(true)
      : setPasswordValid(false);
    if (password !== confirmPassword) {
      toast.error("Invalid Password!!!");
    }
  };
  useEffect(() => {
    const today = new Date();
    const formateddate = today.toISOString().split("T")[0];
    setdob(formateddate);
  }, []);
  return (
    <>
      <div className="">
        <div className="w-[400px] rounded-lg bg-neutral-200 px-10 py-6 shadow-2xl">
          <h1 className="items-center text-center text-3xl">Registration</h1>
          <div className="flex flex-col gap-8">
            <div className="relative">
              <input
                type="text"
                className="w-xs border-b-2 p-2 transition duration-100 focus:border-blue-300 focus:outline-none"
                placeholder="Full Name"
                onChange={(e) => handleNameChange(e)}
                onBlur={handleValid}
                value={name}
                required
              ></input>
              {valid !== null &&
                (valid === true ? (
                  <CheckCircleIcon className="absolute top-2 right-5 h-5 w-5" />
                ) : (
                  <XCircleIcon className="absolute top-2 right-5 h-5 w-5" />
                ))}
            </div>

            <input
              type="date"
              className="w-xs border-b-2 p-2 transition duration-100 focus:border-blue-300 focus:outline-none"
              // onFocus={(e) => (e.target.type = "date")}
              // onBlur={(e) => (e.target.type = "text")}

              onChange={(e) => setdob(e.target.value)}
              value={dob}
              required
            ></input>
            <div className="relative">
              <input
                type="text"
                className="w-xs border-b-2 p-2 transition duration-100 focus:border-blue-300 focus:outline-none"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailValid}
                value={email}
              ></input>
              {emailvalid !== null &&
                (emailvalid === true ? (
                  <CheckCircleIcon className="absolute top-2 right-5 h-5 w-5" />
                ) : (
                  <XCircleIcon className="absolute top-2 right-5 h-5 w-5" />
                ))}
            </div>
            <input
              type="password"
              className="w-xs border-b-2 p-2 transition duration-100 focus:border-blue-300 focus:outline-none"
              placeholder="NewPassword"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <div className="relative">
              <input
                type="password"
                className="w-xs border-b-2 p-2 transition duration-100 focus:border-blue-300 focus:outline-none"
                placeholder="ConfirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handlePassword}
                value={confirmPassword}
              ></input>
              {passwordvalid !== null &&
                (passwordvalid === true ? (
                  <CheckCircleIcon className="absolute top-2 right-5 h-5 w-5" />
                ) : (
                  <XCircleIcon className="absolute top-2 right-5 h-5 w-5" />
                ))}
            </div>
            <div className="flex justify-end">
              <button
                className="rounded-lg border-2 border-black bg-black p-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none"
                onClick={() => handleAddUser()}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationCred;
