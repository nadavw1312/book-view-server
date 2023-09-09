import Joi from "joi";
import { NewCreatedBook } from "./book.interfaces";

const createBookBody: Record<keyof NewCreatedBook, any> = {
  title: Joi.string().required(),
  author: Joi.string().required(),
  publishYear: Joi.number().required(),
};

export const createBook = {
  body: Joi.object().keys(createBookBody),
};

export const getBook = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};
