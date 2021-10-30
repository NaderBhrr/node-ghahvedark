import { FastifyRequest, FastifyReply } from 'fastify';
import { Book } from '../../@types';
import { create } from '../../models/Books/create';

export const addNewBook =
  (db) => async (req: FastifyRequest, res: FastifyReply) => {
    const result: any = await create(db)(
      'books',
      'title',
      req.body as Partial<Book>
    );

    const { statusCode }: { statusCode: number } = result;
    return statusCode === 201
      ? res.code(200).send({
          type: 'post',
          status: 'success',
          message: 'New books successfully added to your bookstore',
        })
      : res.code(404).send({
          message: 'Your request could not be processed',
        });
  };
