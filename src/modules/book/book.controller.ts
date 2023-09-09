import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import bookService from "./book.service";
import httpStatus from "http-status";

class BookController {
  public createBook = catchAsync(async (req: Request, res: Response) => {
    const book = await bookService.createBook(req.body);
    res.status(httpStatus.CREATED).send(book);
  });

  public getAll = catchAsync(async (req: Request, res: Response) => {
    const book = await bookService.getAll();
    res.status(httpStatus.OK).send(book);
  });

  public getById = catchAsync(async (req: Request, res: Response) => {
    const book = await bookService.getById(req.params.id);
    res.status(httpStatus.OK).send(book);
  });

  public update = catchAsync(async (req: Request, res: Response) => {
    await bookService.update(req.params.id, req.body);
    res.status(httpStatus.OK).send("updated");
  });

  public delete = catchAsync(async (req: Request, res: Response) => {
    await bookService.delete(req.params.id);
    res.status(httpStatus.OK).send("deleted");
  });
}

export default new BookController();
