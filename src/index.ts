import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";
import logger from "./modules/logger/logger";
import runSeeds from "./data/index";

let server: any;

mongoose.connect(config.mongoose.url).then(() => {
  logger.info("Connected to MongoDB");
  runSeeds();
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: string) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
