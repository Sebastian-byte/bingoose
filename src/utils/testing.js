import { createStoreAndMiddleware } from '../store';
import reducers from '../reducers';

/**
 * Returns a mocked store used for testing
 * @param {object} state
 */
export const mockedStore = (state) => createStoreAndMiddleware(reducers, state);

/**
 * Returns the string for a data-test element
 * @param {string} id
 */
export const getTestAttr = (id) => `[data-test="${id}"]`;
