import { MongoClient } from 'mongodb';
import fastifyPlugin from 'fastify-plugin';
import { Book, Database } from '../@types';

const DBConnect = async (fastify) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db('ghahvehdark');
    console.log('Database connected successfully');

    fastify.decorate('db', db);
  } catch (error) {
    console.dir('Datbase Error >>', error);
  }
};

/**
 * Closes the MongoDB client connection
 */
function dbClose(client: any) {
  if (client) {
    client.close();
  }
}

export default fastifyPlugin(DBConnect);
