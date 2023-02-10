import express from "express";

import clientsController from "./controllers/clientsController";
import clientsSchema from "./middlewares/clientsSchema";
import { validate } from "./middlewares/validate";

const router = express.Router();

router.get(
  "/clientes/:id",
  validate(clientsSchema.getById),
  clientsController.getById
);

router.get(
  "/consulta/final-placa/:numero",
  validate(clientsSchema.getByLicensePlate),
  clientsController.getByLicensePlate
);

router.delete(
  "/clientes/:id",
  validate(clientsSchema.getById),
  clientsController.remove
);

router.post("/clientes", validate(clientsSchema.post), clientsController.post);

router.put("/clientes/:id", validate(clientsSchema.put), clientsController.put);

export default router;
