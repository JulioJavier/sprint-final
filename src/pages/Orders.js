import React from "react";
import Navbar from "../components/Navbar";

const Orders = () => {
  return (
    <>
      <div className="w-full h-10 flex justify-center mt-5 border-b-2 border-slate-300">
        <h1 className="text-xl text-slate-600">All Orders</h1>
      </div>
      <Navbar />
    </>
  );
};

export default Orders;
