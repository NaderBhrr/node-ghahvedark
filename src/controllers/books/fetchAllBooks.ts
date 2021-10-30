import { FastifyRequest, FastifyReply } from 'fastify';
import { ServerResponse } from 'http';
import { Book, Database } from '../../@types';
import { fetchAll } from '../../models/Books/fetchAll';

export const fetchAllBooks =
  (db) => async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const books = await fetchAll(db)('books');

      return res.code(200).send({
        type: 'fetch',
        status: 'success',
        data: books,
      });
    } catch (error: unknown) {
      console.log(`Error occurred >>> \n`, error);
    }
  };
