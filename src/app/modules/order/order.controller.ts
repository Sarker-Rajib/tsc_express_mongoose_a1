import { Request, Response } from "express";
import { orderValidator } from "./orderValidation";
import { orderServices } from "./order.service";

const createNewOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body
        const validatedData = orderValidator.parse(orderData)
        const result = await orderServices.addOrderToDB(validatedData)

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
}

const getAllOrders = async (req: Request, res: Response) => {
    try {
        if (req.query.email) {
            const email = req.query.email as string
            const result = await orderServices.getOrdersByEmailFromDB(email)

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result.length > 0 ? result : "No data found for this email",
            });
        } else if (Object.keys(req.query).length === 0) {

            const result = await orderServices.getAllOrdersFromDB()

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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went wrong",
            data: error,
        });
    }
}

export const orderController = {
    createNewOrder,
    getAllOrders
}