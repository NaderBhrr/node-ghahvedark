import { homepage } from '../controllers/homepage/homepage';

export async function homepageRoutes(fastify, options) {
  const { db } = fastify;
  fastify.get('/homepage', homepage(db));
}
