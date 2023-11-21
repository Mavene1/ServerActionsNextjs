import { addProducttoDB } from "@/actions/addProducttoDB";
import AddProductButton from "@/components/AddProductButton";
import { Product } from "@/types";

export default async function Home() {
  const res = await fetch(
    "https://655bbdc5ab37729791a9898e.mockapi.io/products",
    {
      cache: "no-cache",
      next:{
        tags: ["product"]
      }
    }
  );
  const products: Product[] = await res.json();



  return (
    <main className="">
      <h1 className="font-bold text-center text-2xl mt-8">Product Warehouse</h1>
      <AddProductButton/>
      <form
        action={addProducttoDB}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter Product Name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter Price..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border rounded-md p-2 bg-green-300">
          Add Product
        </button>
      </form>
      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-3 shadow">
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
