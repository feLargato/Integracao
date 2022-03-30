import { Request, response, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { Produto } from "./../models/Produto";

const produtoRepository = new ProdutoRepository();

export class ProdutoController {

    cadastrar(req: Request, res: Response) {
        console.log(req.body);
        const produto: Produto = req.body;
        produtoRepository.cadastrar(produto);
        res.status(201).json({
            message: "Produto cadastrato",
             data: produto
        });
    }

}
