/**
 *
 * @param {object} [data]
 * @returns object
 */
module.exports = (data = {}) => {
  const res = data;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
