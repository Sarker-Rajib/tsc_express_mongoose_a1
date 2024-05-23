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
    const result = await ProductServices.getAllProductsFromDB();

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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(id);

    if (result == null) {
      res.status(200).json({
        success: false,
        message: "No data found for this Id / Invalid Id",
      });
    } else
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.productId;
    const productData = req.body;
    const validatedProductdata = productValidationSchema.parse(productData);
    const result = await ProductServices.updateProductInDB(
      id,
      validatedProductdata
    );

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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductServices.deleteProductFromDB(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
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
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
