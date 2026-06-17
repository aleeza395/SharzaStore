import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address, payment, paymentMethod} = req.body;

        const orderData = {
            userId,
            items, 
            address,
            amount, 
            paymentMethod,
            payment,  
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: 'Order placed'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const placeOrderEasypaisa = async (req, res) => {
    try {
        const {userId, items, amount, address, payment, paymentMethod, transactionID} = req.body;

        const orderData = {
            userId,
            items, 
            address,
            amount, 
            paymentMethod,
            payment,  
            transactionID,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: 'Order placed'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const userOrders = async (req, res) => {
    try {
        const {userId} = req.body;

        const orders = await orderModel.find({userId});
        res.json({success: true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status updated"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const updatePayment = async (req, res) => {
    try {
        const {orderId, payment} = req.body;

        await orderModel.findByIdAndUpdate(orderId, {payment})
        res.json({success: true, message: "Payment status updated"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {placeOrder, placeOrderEasypaisa, allOrders, userOrders, updateStatus, updatePayment};