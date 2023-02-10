import clientsSchema from "../middlewares/clientsSchema";
import { z } from "zod";

export type IPostClient = z.infer<typeof clientsSchema.post.shape.body>;
export type IGetByIdClient = z.infer<typeof clientsSchema.getById.shape.params>;
export type IGetByLicensePlate = z.infer<
  typeof clientsSchema.getByLicensePlate.shape.params
>;
