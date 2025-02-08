"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";

export const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p>Welcome to your admin panel.</p>
        </div>
      </div>
      <Sidebar />
      
    </div>
  );
};

export default page;
