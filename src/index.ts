import 'reflect-metadata';
import express from 'express';
import "./infrestructure/db_connection"
import {BooksRepository} from "./books/BookService";

const port = process.env.port || 5000;
const app = express();
import container from './infrestructure/inversify.config';

import booksRouter from "./books.routes";
app.use(express.json())
app.use("/api/books", booksRouter)
// const PORT = process.env.PORT || 3000
// const UrlDB = process.env.UrlDB
// async function start(PORT, UrlDB) {
//     try {
//         await mongoose.connect('mongodb://root:example@mongo:27017/');
//         app.listen(PORT, () => console.log(`listening on port ${PORT}`));
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// start(PORT, UrlDB);
app.listen(port, () => console.log(`listening on port: ${port}`));