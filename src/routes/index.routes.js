import express from "express";
import product from "./product.routes.js";
//import chat from "./chat.routes.js";

const restRouter = express.Router();
restRouter.use("/product", product);
//restRouter.use("/chat", chat);
export default restRouter;
