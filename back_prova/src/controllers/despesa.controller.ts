import { Despesa } from "./../models/despesa.model";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class DespesaController {
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let despesa: Despesa = new Despesa();
    despesa.descricao = request.body.descricao;
    despesa.preco = Number.parseInt(request.body.preco);

    const despesaCadatrada = await prisma.despesa.create({
      data: {
        descricao: despesa.descricao,
        preco: despesa.preco,
      },
    });

    return response.status(201).json({ message: "Despesa cadastrada!", dados: despesaCadatrada });
  }
}
