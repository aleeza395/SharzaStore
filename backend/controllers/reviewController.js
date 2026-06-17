import reviewModel from "../models/reviewModel.js";

const addReview = async (req, res) => {
    try {
        const {name, review} = req.body;

        const reviewData = {
            name, 
            review
        }

        const reviews = new reviewModel(reviewData);
        await reviews.save();

        res.json({success: true, message: 'Review added'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const getReview = async (req, res) => {
    try {
        const reviews = await reviewModel.find({});

        res.json({success: true, reviews})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export {addReview, getReview};