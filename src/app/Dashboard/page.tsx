"use client";
import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex">
      
      <div className="flex-1 p-4">
        {/* <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome to your admin panel.</p> */}
        <Link href="/Dashboard/products" className="text-blue-500 underline">
          View Products
        </Link>
      </div>
    </div>
  );
}
