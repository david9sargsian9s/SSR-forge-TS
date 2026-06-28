import express from 'express';
import ProductController from '../controller/ProductController';

const router = express.Router();
const product = new ProductController();

/* POST product. */
router.post('/api/products', product.createProduct);

/* PATCH to update product. */
router.patch("/api/product/:id", product.updateProduct);

/* POST to delete product. */
router.delete('/api/product/:id', product.deleteProduct);

export default router;