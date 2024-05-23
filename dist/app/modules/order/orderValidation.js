"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidator = void 0;
const zod_1 = require("zod");
exports.orderValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number()
});
