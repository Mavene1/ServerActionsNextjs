"use client";

import { addProducttoDB } from "@/actions/addProducttoDB";
import React, { useTransition } from "react";

function AddProductButton() {
  const [isPending, startTransition] = useTransition();
  const formData = new FormData();
  formData.append("product", "Omena");
  formData.append("price", "179");
  return (
    <button
      onClick={() => startTransition(() => addProducttoDB(formData))}
      className="border rounded-md p-2 bg-red-300 fixed bottom-10 right-10 text-white w-48"
    >
      {isPending ? "Adding" : "Add Product"}
    </button>
  );
}

export default AddProductButton;
