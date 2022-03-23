import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const routes = Router();

routes.get("/product/list", new ProductController().list);
routes.post("/product/add", new ProductController().create);
routes.put("/product/update", new ProductController().update);
routes.delete("/product/delete", new ProductController().delete);

export { routes };