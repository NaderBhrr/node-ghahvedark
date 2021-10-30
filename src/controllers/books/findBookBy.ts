import { FastifyRequest, FastifyReply } from 'fastify';
import { ServerResponse } from 'http';
import { Book, Database } from '../../@types';
import { findBy } from '../../models/Books/findBy';

interface QueryParameter {
  [key: string]: any;
}

export const findBookBy =
  (db) => async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const { sortBy, ...queryParams } = req.query as QueryParameter;

      console.log('sortBy', sortBy);
      const matchedBooks = await findBy(db)(
        'books',
        queryParams as QueryParameter,
        sortBy
      );

      console.log('m books >>>', matchedBooks);

      return res.code(200).send({
        type: 'fetch',
        status: 'success',
        data: matchedBooks,
      });
    } catch (error: unknown) {
      console.log(`Error occurred >>> \n`, error);
    }
  };
