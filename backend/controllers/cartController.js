import userModel from "../models/userModel.js";


const addToCart = async (req, res) => {
    try {
        const {userId, itemId, volume} = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

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

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: "Added to cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const updateCart = async (req, res) => {
    try {
        const {userId, itemId, volume, quantity} = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][volume] = quantity;

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: "Added to cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const getUserCart = async (req, res) => {
    try {
        const {userId} = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        res.json({success: true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {addToCart, updateCart, getUserCart}