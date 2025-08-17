// import React, { useContext } from "react";
// import Title from "../Components/Title";
// import CartTotal from "../Components/CartTotal";
// import { assets } from "../assets/frontend_assets/assets";
// import { useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { ToastContainer,toast } from "react-toastify";
// import axios from 'axios'
// const PlaceOrder = () => {
//   const [method, setMethod] = useState("cod");
//   const { navigate,token,cartItems,setCartItems,GetCartAmount,delivery_fee,products} = useContext(ShopContext);

//   const [formdata, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });
//   const onChangeHandler = (event)=>{
//     const name = event.target.name
//     const value = event.target.value


//     setFormData(data => ({...data,[name]:value}))
//   }
//   const onSubmitHandler = async(event)=>{
//     event.preventDefault()
//     try {
      
//       let orderItems = []
//       for(const items in cartItems){
//         for(const item in cartItems[items]){
//           if (cartItems[items][item] > 0) {
//            const itemInfo = structuredClone(products.find(product => product._id === items))
//            if (itemInfo) {
//             itemInfo.size = item
//             itemInfo.quantity = cartItems[items][item] 
//             orderItems.push(itemInfo)
            
//            }
//           }
//         }
//       }
//       const fullAddress = `${street}, ${city}, ${state}, ${country}`;
//        let orderData = {
//         address:fullAddress,
//         items:orderItems,
//         amount:GetCartAmount() + delivery_fee

//        }
//        switch(method){
//         // api calls for cod order
//         case 'cod':
//    const response = await axios.post("http://localhost:4000/api/order/place",{orderData},{headers:{token}})
//    console.log(response.data);
   
//    if (response.data.success) {
//     setCartItems({})
//     navigate('/orders')
//    }
//    else{
// toast.error(response.data.message)
//    }
//           break;
//           default:
//           break;
//        }
        
//         } catch (error) {
//           console.log(error);
          
      
//     }
//   }
  
//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 min-h-[80vh] border-t">
//       {/* left side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1={"DELIVERY"} text2={"INFORMATION"} />
//         </div>
//         <div className="flex gap-3">
//           <input required  onChange={onChangeHandler} name="firstName" value={formdata.firstName}
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="First Name"
//           />
//           <input required
//           onChange={onChangeHandler} name="lastName" value={formdata.lastName}
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Last Name"
//           />
//         </div>
//         <input required  
//         onChange={onChangeHandler} name="email" value={formdata.email}
   
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//           type="email"
//           placeholder="Email Address"
//         />
//         <input required
//         onChange={onChangeHandler} name="street" value={formdata.street}
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Street"
//         />
//         <div className="flex gap-3">
//           <input required
//           onChange={onChangeHandler} name="city" value={formdata.city}
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="City"
//           />
//           <input required
//           onChange={onChangeHandler} name="state" value={formdata.state}
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="State"
//           />
//         </div>
//         <div className="flex gap-3">
//           <input required
//           onChange={onChangeHandler} name="zipcode" value={formdata.zipcode}
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             type="number"
//             placeholder="Zipcode"
//           />
//           <input required
//           onChange={onChangeHandler} name="country" value={formdata.country}
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Country"
//           />
//         </div>
//         <input required
//         onChange={onChangeHandler} name="phone" value={formdata.phone}
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//           type="number"
//           placeholder="Phone Number"
//         />
//       </div>
//       {/* Right side */}
//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>
//         <div className="mt-12">
//           <Title text1={"PAYMENT"} text2={"METHOD"} />
//           {/* Payment method selection */}
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div
//               onClick={() => setMethod("stripe")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "stripe" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
//             </div>
//             <div
//               onClick={() => setMethod("razorpay")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "razorpay" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
//             </div>
//             <div
//               onClick={() => setMethod("cod")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "cod" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <p className="text-gray-500 text-sm font-bold mx-4">
//                 CASH ON DELIVERY
//               </p>
//             </div>
//           </div>

//           <div className="w-full text-end mt-8">
//             <button 
//             type="submit"
//               // onClick={() => navigate("/orders")}
//               className="bg-black text-white px-16 py-3 text-sm"
//             >
//               PLACE ORDER
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    token,
    cartItems,
    setCartItems,
    GetCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // 1) Build order items from cart
      const orderItems = [];
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          const qty = cartItems[productId][size];
          if (qty > 0) {
            const base = products.find((p) => p._id === productId);
            if (base) {
              const cloned =
                typeof structuredClone === "function"
                  ? structuredClone(base)
                  : JSON.parse(JSON.stringify(base));
              cloned.size = size;
              cloned.quantity = qty;
              orderItems.push(cloned);
            }
          }
        }
      }

      if (orderItems.length === 0) {
        toast.error("Your cart is empty.");
        return;
      }

      if (!token) {
        toast.error("You need to be logged in to place an order.");
        return;
      }

      // 2) Compose full address from formdata
      const { street, city, state, zipcode, country } = formdata;
      if (!street || !city || !state || !country) {
        toast.error("Please fill in street, city, state, and country.");
        return;
      }
      const fullAddress = [street, city, state, zipcode, country]
        .filter(Boolean)
        .join(", ");

      // 3) Calculate amount (ensure numbers)
      const subtotal = Number(GetCartAmount() || 0);
      const shipping = Number(delivery_fee || 0);
      const amount = subtotal + shipping;

      // 4) Prepare payload (we’ll send both top-level AND nested under orderData)
      const payload = {
        address: fullAddress,
        items: orderItems,
        amount,
        paymentMethod: method,
        customer: {
          firstName: formdata.firstName,
          lastName: formdata.lastName,
          email: formdata.email,
          phone: formdata.phone,
        },
      };

      if (method !== "cod") {
        toast.info("Only Cash on Delivery is implemented right now.");
        return;
      }

      // 5) Submit order (send both shapes to satisfy either backend expectation)
      const response = await axios.post(
        "http://localhost:4000/api/order/place",
        { ...payload, orderData: payload },
        {
          headers: {
            token, // if your backend expects Authorization, add the next line:
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.success) {
        setCartItems({});
        toast.success("Order placed successfully!");
        navigate("/orders");
      } else {
        toast.error(response.data?.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Order error:", error?.response?.data || error.message);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong while placing the order."
      );
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row justify-between gap-4 pt-5 min-h-[80vh] border-t"
      >
        {/* left side */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formdata.firstName}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formdata.lastName}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formdata.email}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email Address"
          />
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formdata.street}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formdata.city}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formdata.state}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              name="zipcode"
              value={formdata.zipcode}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Zipcode"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formdata.country}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formdata.phone}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        {/* Right side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
          <div className="mt-12">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            {/* Payment method selection */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "stripe" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>
              <div
                onClick={() => setMethod("razorpay")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "razorpay" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>
              <div
                onClick={() => setMethod("cod")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="text-gray-500 text-sm font-bold mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>

            <div className="w-full text-end mt-8">
              <button type="submit" className="bg-black text-white px-16 py-3 text-sm">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default PlaceOrder;
