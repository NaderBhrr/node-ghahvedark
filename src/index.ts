import fastify, { FastifyInstance } from 'fastify';
import { bookRoutes, homepageRoutes } from './routes';
import { Server, IncomingMessage, ServerResponse } from 'http';
import DBConnect from './config/db';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger: true,
    ajv: {
      customOptions: {
        coerceTypes: 'array',
      },
    },
  });

const start = async () => {
  try {
    // Create a global database context to make the database accessible in all routes
    await server.register(DBConnect);

    // Route handling using the fastify routing concept
    await server.register(bookRoutes, { prefix: '/api/books' });
    await server.register(homepageRoutes);

    // `after` will be executed once
    // the previous declared `register` has finished
    server.after((err) => console.log(err));

    const PORT = process.env.PORT || 7000;

    await server.listen(PORT);
    console.log(`Server started successfully at http://localhost:${PORT}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
