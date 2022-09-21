import express from 'express';
import { addPaymentGateway } from '../controller/PaymentController.js';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignup, userlogin } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userlogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);

export default router;