// Purpose: Book service for book module
import { IBookDoc, NewCreatedBook } from "./book.interfaces";
import { Book } from "./book.model";

class BookService {
  public async createBook(bookBody: NewCreatedBook): Promise<IBookDoc> {
    return Book.create({ ...bookBody, stam: "stam" });
  }

  public async getAll(): Promise<IBookDoc[]> {
    return Book.find();
  }

  public async getById(id: string): Promise<IBookDoc[]> {
    return Book.findById(id);
  }

  public async update(id: string, bookBody: NewCreatedBook): Promise<boolean> {
    await Book.findByIdAndUpdate(id, bookBody);

    return true;
  }

  public async delete(id: string): Promise<boolean> {
    await Book.findByIdAndDelete(id);

    return true;
  }
}

export default new BookService();
