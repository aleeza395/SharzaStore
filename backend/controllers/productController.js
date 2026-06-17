import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, volume, bestseller } = req.body;
        const image = req.file;

        const result = await cloudinary.uploader.upload(image.path);

        const productData = {
            name, 
            description, 
            category, 
            price: Number(price),
            bestseller: bestseller === 'true' ? true : false,
            volume,
            image: result.secure_url,
            date: Date.now()
        }

        console.log(productData)

        const product = new productModel(productData);
        await product.save()

        res.json({success: true, message: "Product added to DB"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, products})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product deleted"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        
        const product = await productModel.findById(productId);
        res.json({success: true, product})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { addProduct, listProduct, removeProduct, singleProduct };