import express from 'express';
import { getReview, addReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

reviewRouter.post('/add', addReview);
reviewRouter.get('/get', getReview);

export default reviewRouter;