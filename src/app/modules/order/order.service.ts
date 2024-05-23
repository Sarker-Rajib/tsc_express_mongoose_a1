import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const addOrderToDB = async (orderData: TOrder) => {
    const result = Order.create(orderData)
    return result
}

const getAllOrdersFromDB = async () => {
    const result = Order.find()
    return result
}

const getOrdersByEmailFromDB = async (email: string) => {
    const result = Order.find({ email: email })
    return result
}

export const orderServices = {
    addOrderToDB,
    getAllOrdersFromDB,
    getOrdersByEmailFromDB
}