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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const orderValidation_1 = require("./orderValidation");
const order_service_1 = require("./order.service");
const createNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const validatedData = orderValidation_1.orderValidator.parse(orderData);
        const result = yield order_service_1.orderServices.addOrderToDB(validatedData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (Error) {
        res.status(500).json({
            success: false,
            message: Error.message,
            Error
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.email) {
            const email = req.query.email;
            const result = yield order_service_1.orderServices.getOrdersByEmailFromDB(email);
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result.length > 0 ? result : "No data found for this email",
            });
        }
        else if (Object.keys(req.query).length === 0) {
            const result = yield order_service_1.orderServices.getAllOrdersFromDB();
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: "Something Went wrong",
            });
        }
    }
    catch (Error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            Error,
        });
    }
});
exports.orderController = {
    createNewOrder,
    getAllOrders
};
