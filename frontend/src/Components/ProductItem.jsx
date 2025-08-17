// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'


// const ProductItem = () => {
   
   
//    let {currency,products,setProducts} = useContext(ShopContext)


   
//       //   products.filter((items,index)=> items.bestseller)
//       //     setbestSeller(products.slice(0,1))
// // let newproducts = products.slice(0,1)
// // // const { products } = useContext(ShopContext)
// //  newproducts = [products.slice[0,52]]
// // newproducts = products.slice(0,1)
// // newproducts = newproducts.slice(0,1)
// // const uniqueproducts = products.filter((product,index,self)=> index === self.findIndex((p)=> index === index))


//   return (
// products
//      .map((product,index)=>(
//         <Link key={product._id} className='text-gray-700 cursor-pointer' to={`/product/${product._id}`}>
//    <div className='overflow-hidden'> 
//     <img className='hover:scale-110 transition ease-in-out' src={product.images[0]} alt="" />

//    </div>
//    <p className='pt-3 pb-1 text-sm'>{product.name}</p>
//    <p className='text-sm font-medium'>{currency}{product.price}</p>
//    </Link>

//       )
//    )
    

    
  

    
//   )
    
  
// }

// export default ProductItem

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  const { currency } = useContext(ShopContext);

  if (!product || !product._id) return null;

  return (
    <Link key={product._id} className='text-gray-700 cursor-pointer' to={`/product/${product._id}`}>
      <div className='overflow-hidden'> 
        <img className='hover:scale-110 transition ease-in-out' src={product.images[0]} alt={product.name} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{product.name}</p>
      <p className='text-sm font-medium'>{currency}{product.price}</p>
    </Link>
  );
};


export default ProductItem
