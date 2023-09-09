import { Model, Document } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  publishYear: number;
}

export interface IBookDoc extends IBook, Document {}

export interface IBookModel extends Model<IBookDoc> {}

export type NewCreatedBook = IBook;
