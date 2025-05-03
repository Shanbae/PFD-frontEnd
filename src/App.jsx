import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavigationType,
  Navigate,
} from "react-router-dom";
import Login from "./components/Loogin";
import ForgotCred from "./components/ForgotCred";
import RegistrationCred from "./components/RegistrationCred";
import Layout from "./components/Layout";
import MainLayout from "./components/Dashboard/MainLayout";
import Home from "./components/Dashboard/Home";
import Customer from "./components/Dashboard/Customer";
import Accounts from "./components/Dashboard/Accounts";
import Transactions from "./components/Dashboard/Transactions";
import OurCompany from "./components/Dashboard/OurCompany";
import Loogin from "./components/Loogin";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/login" element={<Loogin />} />
          <Route path="forgotpassword" element={<ForgotCred />} />
          <Route path="registration" element={<RegistrationCred />} />
        </Route>

        {/* Dashboard & Protected Routes */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="customer" element={<Customer />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="our-company" element={<OurCompany />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
