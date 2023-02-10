import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  useUnifiedTopology: true,
  type: "mongodb",
  database: "clients",
  synchronize: true,
  logging: false,
  entities: ["src/models/*.ts"],
  migrations: [],
  subscribers: [],
});
