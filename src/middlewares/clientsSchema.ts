import { z } from "zod";
import { isCpfValid } from "../helpers/isCpfValid";
import { isIdValid } from "../helpers/isIdValid";
import { isLicensePlateValid } from "../helpers/isLicensePlateValid";
import { isPhoneNumberValid } from "../helpers/isPhoneNumberValid";

const id = z.string().refine((value) => isIdValid(value), "Invalid Id");
const licensePlate = z
  .string()
  .max(7, "Placa de carro inválida")
  .refine((value) => isLicensePlateValid(value), "Placa de carro inválida");
const phoneNumber = z
  .string()
  .max(11, "Telefone inválido")
  .refine((value) => isPhoneNumberValid(value), "Telefone inválido");
const cpf = z
  .string()
  .max(11, "CPF inválido")
  .refine((value) => isCpfValid(value), "CPF inválido");

const client = z.object({
  nome: z.string().min(1, "O nome é obrigatório"),
  telefone: phoneNumber,
  cpf,
  placaCarro: licensePlate,
});

const getById = z.object({
  params: z.object({ id }),
});

const getByLicensePlate = z.object({
  params: z.object({
    numero: z.string().max(1, "Enviar apenas o número final da placa de carro"),
  }),
});

const post = z.object({
  body: z.object({
    nome: client.shape.nome,
    telefone: client.shape.telefone,
    cpf: client.shape.cpf,
    placaCarro: client.shape.placaCarro,
  }),
});

const put = z.object({
  body: post.shape.body,
  params: z.object({ id }),
});

export default {
  getById,
  getByLicensePlate,
  post,
  put,
};
