import express from "express";
import morgan from "morgan";
import config from "./config";
import cors from "cors";

import NoiesRoutes from "./routes/noies/noies.routes";
import MantenimentsRoutes from "./routes/manteniments/manteniments.routes";

const app = express();
app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(NoiesRoutes);
app.use(MantenimentsRoutes);

export default app;
