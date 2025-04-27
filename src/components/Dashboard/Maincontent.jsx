import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "./Customer";
import Transactions from "./Transactions";
import Accounts from "./Accounts";
import OurCompany from "./OurCompany";

const Maincontent = () => {
  return (
    <div>
      <Routes>
        <Route path="/DashBoard/Home" element={<Home />}></Route>

        <Route path="/DashBoard/Customer" element={<Customer />}></Route>
        <Route path="DashBoard/Accounts" element={<Accounts />}></Route>

        <Route path="DashBoard/Transactions" element={<Transactions />}></Route>

        <Route path="DashBoard/Our company" element={<OurCompany />}></Route>
      </Routes>
    </div>
  );
};

export default Maincontent;
