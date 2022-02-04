import express from 'express';
import {createProduct} from '../controllers/product.controller.js';
import {catchAsyncErrors , validationCatches} from '../middlewares/tryCatch.js';
import upload from "../middlewares/multer.js";
const router = express.Router({ mergeParams: true });

router.post('/add', upload.single('avatar'), createProduct);

export default router;