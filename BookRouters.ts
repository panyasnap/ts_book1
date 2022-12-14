import {injectable} from "inversify";
import "reflect-metadata";
const BookMod = require('../models/books')
import {Document, Model} from "mongoose";
import {model} from "mongoose";
import {bookSchema} from "./book.schema";


export interface BookItem {
    createBook(Book: Omit<Book, "id">): Promise<BookDocument>

    getBook(id: string): Promise<BookDocument>

    getBooks(): Book[]

    updateBook(id: string): Promise<BookDocument>

    deleteBook(): string
}


@injectable()
class BooksRepository implements BookItem {
    public async createBook(Book: Book): Promise<BookDocument> {
      return await BookMod.save()
    }

    public async getBook(id: string): Promise<BookDocument> {
        const book = await BookMod.findById(id).select('-__V')
        return book
    }

    public async getBooks(): Promise<BookDocument> {
        return await BookMod.find().select('-__V')

    }

    public async updateBook(Book: Book): Promise<BookDocument> {
        return await BookMod.findByIdAndUpdate(id, Book)
    }

    public async deleteBook(id: string): string {
        return await BookMod.deleteOne({_id: id})
    }
}


interface Book {
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string
}

export interface BookDocument extends Book, Document {
}

export interface BookModel extends Model<BookDocument> {
}

export const BookModel = model<BookDocument>("user", bookSchema);


export {BooksRepository};