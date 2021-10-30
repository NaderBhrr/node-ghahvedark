interface QueryParameter {
  [key: string]: any;
}

enum SortBy {
  CreatedAt = 'createdAt',
  Pages = 'pages',
}

export const findBy =
  (db) =>
  async (entity: string, queryParameter: QueryParameter, sortBy?: SortBy) => {
    try {
      console.log(sortBy);
      return sortBy
        ? db
            .collection(entity)
            .find(JSON.parse(JSON.stringify(queryParameter)), { _id: 0 })
            .sort({ [sortBy]: 1 })
            .toArray()
        : db
            .collection(entity)
            .find(JSON.parse(JSON.stringify(queryParameter)), { _id: 0 })
            .toArray();
    } catch (error) {}
  };
