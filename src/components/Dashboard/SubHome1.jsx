import React from "react";
import { Link } from "react-router-dom";

const SubHome1 = () => {
  return (
    <>
      <div className="flex flex-col justify-between space-x-6 md:flex-row">
        <Link
          to="/"
          className="flex w-full items-center justify-center bg-blue-100 p-10 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 md:h-40 md:w-66"
        >
          {/* <Link to="/">kdfsdjfsd</Link> */}Informations
        </Link>
        <Link
          to="/"
          className="flex w-full items-center justify-center bg-blue-100 p-10 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 md:h-40 md:w-66"
        >
          {/* <Link to="/">kdfsdjfsd</Link> */}Transactions
        </Link>
        <Link
          to="/"
          className="flex w-full items-center justify-center bg-blue-100 p-10 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 md:h-40 md:w-66"
        >
          {/* <Link to="/">kdfsdjfsd</Link> */}Our Branches
        </Link>
      </div>
      <div className="mt-10 flex justify-between space-x-6 md:flex-row">
        <Link
          to="/"
          className="flex w-full items-center justify-center bg-blue-100 p-10 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 md:h-40 md:w-66"
        >
          {/* <Link to="/">kdfsdjfsd</Link> */}Applications
        </Link>

        <Link
          to="/"
          className="flex w-full items-center justify-center bg-blue-100 p-10 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 md:h-40 md:w-66"
        >
          {/* <Link to="/">kdfsdjfsd</Link> */}Carrier
        </Link>
        <Link
          to="/"
          className="flex w-full items-center justify-center bg-blue-100 p-10 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 md:h-40 md:w-66"
        >
          {/* <Link to="/">kdfsdjfsd</Link> */}IT
        </Link>
      </div>
    </>
  );
};

export default SubHome1;
