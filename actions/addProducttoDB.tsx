"use server";

import { Product } from "@/types";
import { revalidateTag } from "next/cache";

export const addProducttoDB = async (e: FormData) => {
    
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();
    if (!product || !price) return;
    const newProduct: Product = {
      product,
      price,
    };
    await fetch("https://655bbdc5ab37729791a9898e.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    revalidateTag('products');
  };