import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSellers = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setbestSeller] = useState([])

    useEffect(() => {
      products.map((item,index)=>{
        const bestSeller = products.filter(product => product.bestseller);
        setbestSeller(bestSeller)

    })
        // const bestProduct = products.filter((items,index) => items.bestseller)
        // setbestSeller(bestProduct.slice(6, 14))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Loved by many, these favorites are a must-have for your wardrobe! Featuring timeless designs, unbeatable comfort, and exceptional quality, our best sellers are perfect for any occasion. Don’t miss out on the styles everyone is talking about—shop now and make them yours before they’re gone!
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                

  {bestSeller.map(product => (
    <ProductItem key={product._id} product={product} />
  ))}



            </div>
        </div>
    )
}

export default BestSellers