import express, { Express } from "express";
import cors from "cors";

import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import routes from "./routes/v1";

const app: Express = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(ExpressMongoSanitize());

// v1 api routes
app.use("/api/v1", routes);

export default app;
