import { Container } from "inversify";
import {BooksRepository} from "./BookRouters"
const container = new Container();
container.bind<BooksRepository>(BooksRepository).toSelf()

export default container;

