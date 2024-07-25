import express, { Express } from "express";
import appRouter from "./routes/index.routes";


const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRouter);

export { app };