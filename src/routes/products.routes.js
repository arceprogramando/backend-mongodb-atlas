import { Router } from 'express';
import productModel from '../models/products.models.js';

const router = Router();

// Lectura
router.get('/api/products', async (req, res) => {
  try {
    const products = await productModel.find();
    res.send({ result: 'success', payload: products });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`No se ha podido traer los products desde mongoose ${error}`);
  }
});

export default router;
