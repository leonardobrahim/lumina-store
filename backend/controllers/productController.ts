import { Request, Response } from 'express';
// import { Product } from '../models/Product';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response) => {
  try {
    // const products = await Product.find({});
    // res.json(products);
    res.json({ message: "List of products placeholder" });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req: Request, res: Response) => {
  try {
    // const product = await Product.findById(req.params.id);
    // if (product) res.json(product);
    // else res.status(404).json({ message: 'Product not found' });
    res.json({ message: `Product details for ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};