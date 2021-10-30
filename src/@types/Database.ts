import { Collection } from 'mongodb';
import { Book } from '.';

export interface Database {
  books: Collection<Book>;
}
