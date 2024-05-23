import express from "express";
import { ProductControllers } from "./product.controller";

// define router
const router = express.Router();

// define routes
router.post("/", ProductControllers.createNewProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteProduct);

// export router
export const ProductRoutes = {
  router,
};
