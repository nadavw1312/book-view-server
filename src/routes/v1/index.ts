import express, { Router } from "express";
import bookRoute from "./book.route";
const router: Router = express.Router();

const routes = [
  {
    path: "/books",
    route: bookRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
