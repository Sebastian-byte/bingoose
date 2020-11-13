/**
 * Returns an object representing an action, depending on the action type and payload value
 * @param {string} type
 */
export const createAction = (type) => (payload) => ({
  type,
  payload,
});
