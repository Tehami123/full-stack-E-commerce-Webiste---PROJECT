import { createContext, useState, useEffect } from "react";
// import { products } from "../assets/frontend_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showsearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addtocart = async (itemId, size) => {
    if (!size) {
      toast.error("Select the Product size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          "http://localhost:4000/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalcount;
  };

  const UpdateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          "http://localhost:4000/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const GetCartAmount = () => {
    let TotalAmount = 0;
    for (const items in cartItems) {
      let iteminfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            TotalAmount += iteminfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return TotalAmount;
  };

  // const getProductData = async () => {
  //   try {
  //     const response = await axios.get(`${backendUrl}/api/product/list`)
  //   console.log(response.data);
  //   } catch (error) {
  //     console.log(err)
  //   }

  // }

  const getProductData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/product/list"
      );
      console.log(response.data);
      if (response.data.success) {
        setProducts(response.data.products);

        console.log(response.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  // useEffect(() => {
  //     console.log(cartItems)
  // }, [cartItems])

  const value = {
    products,
    setProducts,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addtocart,
    getcartcount,
    UpdateQuantity,
    GetCartAmount,
    navigate,
    token,
    setToken,
    backendUrl,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
