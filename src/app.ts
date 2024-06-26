import express, { Application, Request, Response, json } from "express";
const app: Application = express();
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello There! This is E-Commerce asm2 Server");
});

// product api
app.use("/api/products", ProductRoutes.router);
app.use("/api/orders", OrderRoutes.router);

app.get("*", (req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
