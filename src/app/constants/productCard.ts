// src\constant\productCard.ts
export interface Product {
    id: number
    name: string
    category: string
    price: number
    image: string
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Library Chair",
      category: "Library chair",
      price: 13995,
      image: "/images/wood1.png",
    },
    {
      id: 2,
      name: "Library Chair",
      category: "Library Chair",
      price: 13995,
      image: "/images/wood2.png",
    },
    {
      id: 3,
      name: "Library Chair",
      category: "Library Chair",
      price: 16995,
      image: "/images/wood3.png",
    },
    {
      id: 4,
      name: "Library Chair",
      category: "Library Chair",
      price: 13995,
      image: "/images/wood3.png",
    },
  ]
  