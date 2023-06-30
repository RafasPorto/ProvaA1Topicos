import { Router } from "express";
import { DespesaController } from "../controllers/despesa.controller";

const router: Router = Router();

router.post("/", new DespesaController().cadastrar);

export { router };
