
import Product from '../models/product.model.js'
import HTTPResponse from '../utils/http-response.js'
import StatusCodes from "http-status-codes";
import { GET_IMAGE_PATH } from '../config/imagePath.js';

export const createProduct = async (req, res) => {
    
    let product = new Product({
        ...req.body,
    });
    if(req.file){
        product.mediaFiles = `${GET_IMAGE_PATH}/`+req.file.filename
    }
    await product.save();
    let response = new HTTPResponse(product, "Product created successfully!");  
    res.status(StatusCodes.CREATED).json(response);
    
};