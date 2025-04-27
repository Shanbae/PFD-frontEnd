import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
const ForgotCred = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="">
        <div className="w-[400px] rounded-lg p-6 shadow-lg">
          <h1 className="items-center pb-5 text-center text-3xl">
            Forgot password
          </h1>
          <input
            type="text"
            className="w-xs border-b-2 p-1"
            placeholder="email@"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <div className="flex justify-end">
            <button className="mt-7 flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow-md hover:bg-blue-600">
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
