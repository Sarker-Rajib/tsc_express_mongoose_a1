import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../product/product.model";

const orderModel = new Schema<TOrder>({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
})

orderModel.pre('save', async function (next) {
    const product = await Product.find({ _id: Object(this.productId) })
    if (product[0].inventory.quantity < this.quantity) {
        return next(new Error('Inventory is not sufficient'));
    }
    else {
        next()
    }
})

export const Order = mongoose.model("Order", orderModel)