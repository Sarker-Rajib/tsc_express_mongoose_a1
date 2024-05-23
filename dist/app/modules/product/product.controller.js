"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const productValidation_1 = __importDefault(require("./productValidation"));
const createNewProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const validatedProductdata = productValidation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.addProductIntoDB(validatedProductdata);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(id);
        if (result == null) {
            res.status(200).json({
                success: false,
                message: "No data found for this Id / Invalid Id",
            });
        }
        else
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const productData = req.body;
        const validatedProductdata = productValidation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.updateProductInDB(id, validatedProductdata);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
});
exports.ProductControllers = {
    createNewProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
