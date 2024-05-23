import express from "express";
import { ProductControllers } from "./product.controller";

// define router
const router = express.Router();

// define routes
router.post("/", ProductControllers.createNewProduct);
router.get("/", ProductControllers.getAllProducts);

// export router
export const ProductRoutes = {
  router,
};
