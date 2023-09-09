import { Book } from "../modules/book/book.model";
import books from "./books";

const runSeeds = async () => {
  try {
    const res = await Book.findOne({});
    if (!res) {
      await Book.insertMany(books);
    }

    console.log("Data Import Success");
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

export default runSeeds;
