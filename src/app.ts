import express from "express";
import cors from "cors";
import "reflect-metadata";

import router from "./router";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(router);

export default app;
