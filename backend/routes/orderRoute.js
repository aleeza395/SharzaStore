import express from 'express';
import {placeOrder, placeOrderEasypaisa, allOrders, userOrders, updateStatus, updatePayment} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);
orderRouter.post('/payment', adminAuth, updatePayment);

orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/easypaisa', authUser, placeOrderEasypaisa);

orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;