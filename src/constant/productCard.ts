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
      image: "/images/lib.png",
    },
    {
      id: 2,
      name: "Home sofa",
      category: "Home sofa",
      price: 13995,
      image: "/images/home_sofa.png",
    },
    {
      id: 3,
      name: "Stool",
      category: "Stool",
      price: 16995,
      image: "/images/home_sofa.png",
    },
    {
      id: 4,
      name: "Home sofa",
      category: "Home sofa",
      price: 13995,
      image: "/images/home_sofa.png",
    },
  ]