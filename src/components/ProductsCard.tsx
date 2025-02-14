"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { searchName } from "@/app/globalState/globalState";
import { sanityFetch } from "@/services/sanityApi";

export interface Card {
  image: string;
  colors: string[];
  productName: string;
  _id: string;
  category: string;
  status: string;
  description: string;
  inventory: number;
  price: number;
}

interface Product {
  image?: string;
  colors?: string[];
  productName?: string;
  _id?: string;
  category?: string;
  status?: string;
  description?: string;
  inventory?: number;
  price?: number;
}

export default function ProductsCards({
  selectedCategory,
  price,
}: {
  selectedCategory: string | null;
  price: number;
}) {
  const [search] = useAtom(searchName);
  const [data, setData] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(null);

        let query = '*[_type == "product"]';

        if (search) {
          query = `*[_type == "product" && productName match "${search}*"]`;
        } else if (price) {
          query = `*[_type == 'product' && price < ${price}]`;
        } else if (selectedCategory) {
          query = `*[_type == 'product' && category == "${selectedCategory}"]`;
        }

        const res: Product[] = await sanityFetch(query);

        const transformedData: Card[] = res.map((product: Product) => ({
          image: product.image || "/default-image.png",
          colors: product.colors || [],
          productName: product.productName || "Unnamed Product",
          _id: product._id || "",
          category: product.category || "Uncategorized",
          status: product.status || "active",
          description: product.description || "",
          inventory: product.inventory || 0,
          price: product.price || 0,
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [selectedCategory, price, search]);

  if (isLoading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center py-8">No products available.</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item: Card, index: number) => {
        return (
          <Card
            className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]"
            key={index}
          >
            <Link
              href={`/products/ProductDetail?image=${item.image}&colors=${item.colors.join(
                ","
              )}&productName=${item.productName}&_id=${item._id}&category=${
                item.category
              }&description=${item.description}&inventory=${item.inventory}&price=${
                item.price
              }`}
            >
              <div className="relative h-[348px] w-full bg-[#F5F5F5]">
                <Image
                  src={item.image}
                  alt="card Image"
                  width={316}
                  height={316}
                  className="w-auto h-auto p-4"
                  loading="lazy"
                  quality={75}
                />
              </div>
            </Link>
            <div className="p-4 space-y-2">
              {true && (
                <span className="text-[#9E3500] text-[15px] font-medium font-['Helvetica_Neue']">
                  {item.status}
                </span>
              )}
              <div className="space-y-1">
                <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
                  {item.productName}
                </h3>
                <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                  {item.category}
                </p>
              </div>
              <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                {item.colors.length} Colour{item.colors.length !== 1 ? "s" : ""}
              </p>
              <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
                MRP : ₹ {item.price.toFixed(2)}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}