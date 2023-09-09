import mongoose from "mongoose";
import { IBookDoc, IBookModel } from "./book.interfaces";

const bookSchema = new mongoose.Schema<IBookDoc, IBookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model<IBookDoc, IBookModel>("Book", bookSchema);
