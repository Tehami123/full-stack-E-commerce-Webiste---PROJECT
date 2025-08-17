// import React, { useContext, useState,useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/frontend_assets/assets";
// import Title from '../Components/Title';
// import ProductItem from "../Components/ProductItem"
// // import newproductshehe from "../Components/ProductItem"
// // import Productionitem from "../Components/productionitem";


// const Collection = () => {
//   const { products,search,showsearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setsortType] = useState('relevant')
 
//   const toggleCategory = (e)=>{
// if (category.includes(e.target.value)) {
//   setCategory(prev=> prev.filter(item=>item !== e.target.value))
// }
// else{
//   setCategory(prev => [...prev,e.target.value])
// }
//   }
//   const toggleSubCategory = (e)=>{
// if (subCategory.includes(e.target.value)) {
//   setSubCategory(prev=> prev.filter(item=>item !== e.target.value))
// }
// else{
//   setSubCategory(prev => [...prev,e.target.value])
// }
//   }

//   const ApplyFilter = ()=>{

//     let productsCopy = products.slice();
//     if (showsearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     }
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
      
//     }
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//     }
//     setFilterProducts(productsCopy)
//   }

// const SortProduct = ()=>{

//   let fpcopy = filterProducts.slice();
//   switch(sortType){
//     case 'low-high':
//       setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)));
//       break;
//       case 'high-low':
//         setFilterProducts(fpcopy.sort((a,b)=>(b.price - a.price)))
//       break;
//       default:
//         ApplyFilter();
//         break;
//   }
// }
// useEffect(() => {
//   SortProduct()
// }, [sortType])


// // useEffect(() => {
// //   setFilterProducts(products)

// // }, [])
// useEffect(() => {
//   ApplyFilter()
// }, [category,subCategory,search,showsearch])


// // useEffect(() => {
// //   console.log(category)

// // }, [category])
// // useEffect(() => {
// //   console.log(subCategory)

// // }, [subCategory])

//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
//       {/* Filter options */}
//       <div className="min-w-60">
//         <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
//           FILTERS <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
//         </p>
        
//         {/* Category Filter */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilter ? "" : "hidden"
//           } sm:block`}
//         >
//           <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} /> Men
//             </p>
//             <p className="flex gap-2">
//               <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} /> Women
//             </p>
//             <p className="flex gap-2">
//               <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory} /> Kids
//             </p>
//           </div>
//         </div>
//         {/* sub Categories filter*/}
// <div
//           className={`border border-gray-300 pl-5 py-3 my-5 ${
//             showFilter ? "" : "hidden"
//           } sm:block`}
//         >
//           <p className="mb-3 text-sm font-medium">TYPE</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory}/> Topwear
//             </p>
//             <p className="flex gap-2">
//               <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
//             </p>
//             <p className="flex gap-2">
//               <input type="checkbox" className="w-3" value={"Winterwear"}  onChange={toggleSubCategory}/> Winterwear
//             </p>
//           </div>
//         </div>
//       </div>

// {/* right Side */}
// <div className="flex-1">
//   <div className="flex justify-between text-base sm:text-2xl mb-4">
//     <Title text1={'ALL'} text2={'COLLECTIONS'}/>
//    {/* Product sort */}
//    <select onChange={(e)=>setsortType(e.target.value)} className="border border-gray-300 text-sm px-2">
//     <option value="relavent">Sort by: Relavance</option>
//     <option value="low-high">Sort by: Price low-high</option>
//     <option value="high-low">Sort by: Price high-low</option>
//    </select>
//   </div>

//   {/* Map Products */}
//   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
// {
//   filterProducts.map((item,index)=>(
//     <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.images[0]}/>
//   ))
// }

//   </div>
// </div>

//     </div>
//   );
// };

// export default Collection;


import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterConfig, setFilterConfig] = useState({
    gender: [],
    type: [],
  });
  const [sortType, setSortType] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleFilter = (group, value) => {
    setFilterConfig((prev) => {
      const updatedGroup = prev[group].includes(value)
        ? prev[group].filter((item) => item !== value)
        : [...prev[group], value];
      return { ...prev, [group]: updatedGroup };
    });
  };

  const applyFilters = () => {
    let result = [...products];

    if (showSearch && search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterConfig.gender.length > 0) {
      result = result.filter((item) =>
        filterConfig.gender.includes(item.category)
      );
    }

    if (filterConfig.type.length > 0) {
      result = result.filter((item) =>
        filterConfig.type.includes(item.subCategory)
      );
    }

    setFilteredProducts(result);
  };

  const sortProducts = () => {
    let sorted = [...filteredProducts];
    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilters();
        return;
    }
    setFilteredProducts(sorted);
  };

  useEffect(() => {
    applyFilters();
  }, [filterConfig, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Panel */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Gender Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">GENDER</p>
          {["Men", "Women", "Kids"].map((gender) => (
            <label key={gender} className="flex gap-2 text-sm font-light text-gray-700">
              <input
                type="checkbox"
                className="w-3"
                value={gender}
                onChange={() => toggleFilter("gender", gender)}
              />
              {gender}
            </label>
          ))}
        </div>

        {/* Type Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
            <label key={type} className="flex gap-2 text-sm font-light text-gray-700">
              <input
                type="checkbox"
                className="w-3"
                value={type}
                onChange={() => toggleFilter("type", type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Sort by: Price low-high</option>
            <option value="high-low">Sort by: Price high-low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
                {filteredProducts.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

