import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const addProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSearchedProductsFromDB = async (query: string) => {
  let regex = new RegExp(query, "i");
  const result = await Product.aggregate([{ $match: { name: regex } }]);
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.find({ _id: Object(productId) });
  if (result.length < 1) {
    return null;
  }
  return result;
};

const updateProductInDB = async (
  productId: string,
  validatedProductdata: TProduct
) => {
  const result = await Product.updateOne(
    { _id: Object(productId) },
    validatedProductdata,
    {
      upsert: true,
    }
  );
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.deleteOne({ _id: Object(productId) });
  return result;
};

export const ProductServices = {
  addProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  getSearchedProductsFromDB,
};
