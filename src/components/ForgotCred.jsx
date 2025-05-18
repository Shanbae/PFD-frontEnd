import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import api from "../api";
import { toast } from "react-hot-toast";
const ForgotCred = () => {
  const [emails, setEmails] = useState("");
  const [emailvalid, setEmailValid] = useState(null);
  const handleEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(emails));
    if (emailRegex.test(emails) === false) {
      toast.error("Invalid Email!!!");
    }
  };
  const handlefetchUser = async () => {
    try {
      const response = await api.post(
        // "https://localhost:7207/api/Registration/FetchUser",
        `${import.meta.env.VITE_REA}/api/Registration/FetchUser`,
        emails,
      );
      if (response.status === 200) {
        toast.success("Mail has been sent!! Please verify it");
      }
    } catch {
      toast.error("Somthing Wrong!!!");
    }
  };
  return (
    <>
      <div className="">
        <div className="w-[400px] rounded-lg p-6 shadow-2xl md:border-[0.5px] md:border-amber-400">
          <h1 className="items-center pb-5 text-center text-3xl text-amber-400">
            Forgot password
          </h1>
          <input
            type="text"
            className="w-xs border-b-2 p-1 text-white hover:border-amber-400 focus:outline-none"
            placeholder="Email@"
            onChange={(e) => setEmails(e.target.value)}
            onBlur={handleEmailValid}
            value={emails}
          ></input>
          <div className="flex justify-end">
            <button
              className="mt-7 flex items-center gap-2 rounded-lg px-4 py-2 font-medium shadow-md hover:bg-amber-400"
              onClick={handlefetchUser}
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>Send Email</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotCred;
