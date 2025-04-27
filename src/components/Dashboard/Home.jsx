import React from "react";
import banner from "../../images/banner.webp";
import SubHome1 from "./SubHome1";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col p-2 md:flex-row">
        <div className="space-y-4 p-2">
          <h1 className="text-2xl text-black">
            Welcome to Personal Finance Dashboard!!!
          </h1>
          <p className="text-xl">
            Your smart way to track income, expenses, and savings effortlessly!
          </p>
          <p className="items-center text-xl">
            Gain full control over your finances with intuitive charts and
            reports.
          </p>
          <p className="items-center text-xl">
            Easily manage multiple accounts, view your transaction history, and
            set your financial goals.
          </p>
          <p className="items-center text-xl">
            Designed to keep your money organized, secure, and right at your
            fingertips.
          </p>
        </div>
        <div className="flex w-1/2">
          <img src={banner}></img>
        </div>
      </div>
      <div className="overflow-visible">
        <SubHome1 />
      </div>
    </>
  );
};

export default Home;
