import express, { Application, Request, Response, json } from "express";
const app: Application = express();
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello There! This is E-Commerce asm2 Server");
});

// product api
app.use("/api/products", ProductRoutes.router);

export default app;
