import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";
import { EmailController } from "../controllers/EmailController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

routes.post("/product/add", new ProdutoController().cadastrar);

routes.get("email/enviar", new EmailController().enviar);
export { routes };
