export const fetchAll = (db) => async (entity: string) => {
  try {
    return await db.collection(entity).find({}).toArray();
  } catch (error) {
    return error;
  }
};
