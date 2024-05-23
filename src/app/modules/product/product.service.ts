import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const addProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getProductsFromDB = async () => {
  const result = await Product.find();

  return result;
};

export const ProductServices = {
  addProductIntoDB,
  getProductsFromDB,
};
