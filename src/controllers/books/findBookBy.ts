import { FastifyRequest, FastifyReply } from 'fastify';
import { findBy } from '../../models/Books/findBy';

interface QueryParameter {
  [key: string]: any;
}

export const findBookBy =
  (db) => async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const { sortBy, ...queryParams } = req.query as QueryParameter;

      const matchedBooks = await findBy(db)(
        'books',
        queryParams as QueryParameter,
        sortBy
      );

      return res.code(200).send({
        type: 'fetch',
        status: 'success',
        data: matchedBooks,
      });
    } catch (error: unknown) {
      console.log(`Error occurred >>> \n`, error);
    }
  };
