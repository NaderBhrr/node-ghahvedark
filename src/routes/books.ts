import { addNewBook } from '../controllers/books/addNewBook';
import { fetchAllBooks } from '../controllers/books/fetchAllBooks';
import { findBookBy } from '../controllers/books/findBookBy';

export async function bookRoutes(fastify, options) {
  const { db } = fastify;
  fastify.get('/get-all-books', fetchAllBooks(db));
  fastify.get('/find-book', findBookBy(db));
  fastify.post('/add-new-book', addNewBook(db));

  fastify.get('/update-book-details', async function (req, res) {
    return {
      naw: 'cheked',
    };
  });
}
