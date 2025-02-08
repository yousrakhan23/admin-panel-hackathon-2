import { NextResponse } from "next/server";

// Fake Product Data
const products = [
  { id: 1, name: "iPhone 15", price: 999 },
  { id: 2, name: "MacBook Pro", price: 1999 },
  { id: 3, name: "AirPods Pro", price: 249 },
];

export async function GET() {
  return NextResponse.json(products);
}
