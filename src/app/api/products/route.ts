import { NextResponse } from "next/server";

// Fake Product Data
const products = [
  { id: 1, name: "wood1", price: 999 },
  { id: 2, name: "wood2", price: 1999 },
  { id: 3, name: "wood3", price: 249 },
];

export async function GET() {
  return NextResponse.json(products);
}
