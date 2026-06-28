import express from 'express';
import ProductController from '../controller/ProductController';
import loadProduct from '../middlewares/loadProduct';

const router = express.Router();
const product = new ProductController();

/* POST product. */
router.post('/api/products', product.createProduct);

/* PATCH to update product. */
router.patch("/api/product/:id", loadProduct, product.updateProduct);

/* DELETE to delete product. */
router.delete('/api/product/:id', loadProduct, product.deleteProduct);

export default router;