interface QueryParameter {
  [key: string]: any;
}

export const findBy =
  (db) => async (entity: string, queryParameter: QueryParameter) => {
    try {
      console.log('q param >>', JSON.parse(JSON.stringify(queryParameter)));
      return db
        .collection(entity)
        .find(JSON.parse(JSON.stringify(queryParameter)), { _id: 0 })
        .toArray();
    } catch (error) {}
  };
