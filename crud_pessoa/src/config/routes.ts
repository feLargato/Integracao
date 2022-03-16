import { Router } from "express";
import { ProductController } from "../controllers/productController";

const routes = Router();

routes.post("/product/list", new ProductController().list);
routes.post("/product/add", new ProductController().create);
routes.post("/product/update", new ProductController().update);
routes.post("/product/delete", new ProductController().delete);

export { routes };