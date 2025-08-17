import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useState,useEffect } from "react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
  
          const latestProducts = products
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 8);
setLatestProducts(products.slice(0,8))
  }, [products])
  
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          There is some text here that i will type later rn ill fill it like this
        </p>
      </div>
{/* rendering products */}
<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
  {latestProducts.map(product => (
    <ProductItem key={product._id} product={product} />
  ))}
</div>


    </div>
  );
};

export default LatestCollection;
