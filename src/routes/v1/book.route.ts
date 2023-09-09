import express, { Router } from "express";
import validate from "../../modules/validate/validate.middleware";
import { bookValidation } from "../../modules/book";
import bookController from "../../modules/book/book.controller";

const router: Router = express.Router();

router.post(
  "/create",
  validate(bookValidation.createBook),
  bookController.createBook
);

router.get("/", bookController.getAll);

router.get("/:id", validate(bookValidation.getBook), bookController.getById);

router.put("/:id", validate(bookValidation.getBook), bookController.update);

router.delete("/:id", validate(bookValidation.getBook), bookController.delete);

export default router;
