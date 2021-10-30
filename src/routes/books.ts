import { addNewBook } from '../controllers/books/addNewBook';
import { fetchAllBooks } from '../controllers/books/fetchAllBooks';
import { findBookBy } from '../controllers/books/findBookBy';

const BookBody = {
  type: 'object',
  required: ['title', 'author', 'pages', 'categories'],
  properties: {
    title: { type: 'string' },
    author: { type: 'string' },
    pages: { type: 'integer' },
    categories: { type: 'array', items: { type: 'string' } },
    summary: { type: 'string' },
  },
};

export async function bookRoutes(fastify, options) {
  const { db } = fastify;
  fastify.get('/get-all-books', fetchAllBooks(db));
  fastify.get(
    '/find-book',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            categories: { type: 'string' },
            author: { type: 'string' },
            sortBy: { type: 'string' },
          },
        },
      },
    },
    findBookBy(db)
  );
  fastify.post(
    '/add-new-book',
    {
      schema: {
        body: BookBody,
      },
    },
    addNewBook(db)
  );
}
