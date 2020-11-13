import { createStoreAndMiddleware } from '../store';
import reducers from '../reducers';

/**
 * Returns a mocked store used for testing
 * @param {object} state
 */
export const mockedStore = (state) => createStoreAndMiddleware(reducers, state);
