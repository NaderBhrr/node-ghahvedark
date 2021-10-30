import { Book, Database } from '../../@types';

export const homepage = (db) => async (req, res) => {
  try {
    console.log('req>>url', req.url);
    console.log('req:db >>>', db.s.client);
    return res.code(200).send({
      type: 'fetch',
      status: 'success',
      message: `${req.url}`,
    });
  } catch (error) {
    console.log(`Error occurred: \n ${error}, 'fetchAll()`);
  }
};
