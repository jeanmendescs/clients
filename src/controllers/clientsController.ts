import {
  IPostClient,
  IGetByIdClient,
  IGetByLicensePlate,
} from "../types/interfaces";
import { Request, Response } from "express";
import Clients from "../models/Clients";
import { ObjectID } from "mongodb";
import { ObjectLiteral } from "typeorm";

const getById = async (req: Request<IGetByIdClient>, res: Response) => {
  const { id } = req.params;

  const client = await Clients.findOneBy({ _id: ObjectID(id) });

  return res.json(client);
};

const getByLicensePlate = async (
  req: Request<IGetByLicensePlate>,
  res: Response
) => {
  const { numero } = req.params;

  const where: ObjectLiteral = { placaCarro: new RegExp(`${numero}$`) };

  const client = await Clients.find({
    where,
  });

  return res.json(client);
};

const post = async (
  req: Request<object, object, IPostClient>,
  res: Response
) => {
  const { cpf, nome, telefone, placaCarro } = req.body;

  const client = await Clients.save({
    cpf,
    nome,
    telefone,
    placaCarro,
  });

  return res.json(client);
};

const put = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { cpf, nome, telefone, placaCarro } = req.body;

  const client = await Clients.update(
    { _id: ObjectID(id) },
    {
      cpf,
      nome,
      telefone,
      placaCarro,
    }
  );

  return res.json(client);
};

const remove = async (req: Request<IGetByIdClient>, res: Response) => {
  const { id } = req.params;

  const deleteClient = await Clients.delete(id);
  return res.json(deleteClient);
};

export default {
  getById,
  getByLicensePlate,
  post,
  put,
  remove,
};
