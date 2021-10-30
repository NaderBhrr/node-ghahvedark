export const create =
  (db) => async (entity: string, uniqueField: string, data: object) => {
    try {
      const newEntity = data;

      // Create a sparse unique index
      await db
        .collection(entity)
        .createIndex({ [uniqueField]: 1 }, { sparse: true, unique: true });
      const result = await db.collection('books').insertOne(newEntity);

      return { data: { createdId: result.insertedId }, statusCode: 201 };
    } catch (error) {
      return error;
    }
  };
