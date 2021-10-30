## Node Project:

The task specifies the following functionality for the booking app.

- User should be able to create a new book entry, which "title" as the unique field
- User should be able to seatch the books based on the following fields: - title - categories - author

- User should be able to sort the books based on the "createdAt" and "number of pages".

### Project Details:

#### Technologies:

The following technologies and tools has been used to accompllish the task.

1. Fastify : as the web server
2. MongoDB : database
3. TypeScript
4.

Soome design patterns has been used throughout the task in order to have a clean folder structure and flow of logic.

- Singleton pattern for database configuration
- Repository pattern for encapsulating the datbase queries inside its own directory and having a clean data access pattern
- MVC pattern to segragate the controller logic from database
- context-based flow of data to make the database instace avaialbe in all routes
