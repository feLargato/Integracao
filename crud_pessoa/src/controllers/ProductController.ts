import { Request, Response } from "express";
import { Product } from "../model/Product";

const products: Product[] = [];

export class ProductController {
    create(req: Request, res: Response) : void {

        products.push(req.body);

        res.status(201).json({
            message: "Added product",
            data : products
        });
    
    }

    list(req: Request, res: Response) {

    }

    update(req: Request, res: Response) {

    }

    delete(req: Request, res: Response) {

    }
}