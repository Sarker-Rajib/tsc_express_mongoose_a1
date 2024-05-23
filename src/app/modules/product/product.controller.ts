import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./productValidation";

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validatedProductdata = productValidationSchema.parse(productData);
    const result = await ProductServices.addProductIntoDB(validatedProductdata);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something Went wrong",
      data: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something Went wrong",
      data: error,
    });
  }
};

export const ProductControllers = {
  createNewProduct,
  getAllProducts,
};
