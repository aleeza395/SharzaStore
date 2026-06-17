import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Product from "../pages/Product.jsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Shopcontext = createContext();

const Shopcontextprovider = (props) => {

    const currency = 'PKR ';
    const delivery_fee = 350;
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    console.log(backendUrl)
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate(); 

    const addToCart = async (itemId, volume) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][volume]) {
                cartData[itemId][volume] += 1;
            } else {
                cartData[itemId][volume] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][volume] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', {itemId, volume}, {headers: {token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, volume, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][volume] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', {itemId, volume, quantity}, {headers: {token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers: {token}});
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect (() => {
        getProductsData();
    }, [])

    useEffect (() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems, 
        getCartCount, updateQuantity, getCartAmount,
        navigate,
        backendUrl, 
        token, setToken
    }

    return (
        <Shopcontext.Provider value = {value}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default Shopcontextprovider;