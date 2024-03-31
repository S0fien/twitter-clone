import { Query, Resolver } from "type-graphql";
import Book from "../entities/book.entity";
import BookService from "../services/book.service";

@Resolver()
export default class BookResolver {
  @Query(() => [Book])
  async books() {
    return await new BookService().listBooks();
  }
}
