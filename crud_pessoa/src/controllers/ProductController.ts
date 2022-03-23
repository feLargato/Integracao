import { Request, Response } from "express";
import { ProductRepository } from "../repositories/ProductRepository";

const produtoRepository = new ProductRepository

export class ProductController {

    create(req: Request, res: Response) : void {

        const products = produtoRepository.create(req.body);

        res.status(201).json({
            message: "Added product",
            data : products
        });
    
    }

    list(req: Request, res: Response) {
        
        const products = produtoRepository.list();

        res.status(200).json({
            message: "Products found",
            data : products
        });

    }

    update(req: Request, res: Response) {

        const products = produtoRepository.update(req.body);

        res.status(200).json({
            message: "Product updated",
            data : products
        });

    }

    delete(req: Request, res: Response) {

        const product = produtoRepository.delete(req.body.id);

        res.status(201).json({
            message: "Product removed sucessfully",
            data : product
        });
    }
}