export const homepage = (db) => async (req, res) => {
  try {
    return res.code(200).send({
      type: 'fetch',
      status: 'success',
      message: `${req.url}`,
    });
  } catch (error) {
    console.log(`Error occurred: \n ${error}, 'fetchAll()`);
  }
};
