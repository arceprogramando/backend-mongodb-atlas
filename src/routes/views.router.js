import { Router } from 'express';
import productModel from '../models/products.models.js';
import configObject from '../config/config.js';

const router = Router();
const { PORT } = configObject;

router.get('/', async (req, res) => {
  const products = await productModel.find();
  res.render('home', {
    products,
    style: 'index.css',
    port: PORT,
  });
});

router.get('/realtimeproducts', async (req, res) => {
  try {
    const products = await productModel.find();
    // Aqui envio mis products
    res.render('realTimeProducts', {
      products,
      style: 'index.css',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

export default router;
