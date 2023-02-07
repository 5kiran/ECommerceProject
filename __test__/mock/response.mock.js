/**
 *
 * @param {object} [data]
 * @returns object
 */
module.exports = (data = {}) => {
  const res = data;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.cookie = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.clearCookie = jest.fn().mockRejectedValue(res);
  return res;
};
