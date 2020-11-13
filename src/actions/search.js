import { createAction } from '../utils/actions';
import { SEARCHING, SEARCHING_FAILURE, SEARCHING_SUCCESS } from '../constants';
import { bingSearch, googleSearch, multipleSearch } from '../services';

export const onActionRequest = createAction(SEARCHING);
export const onActionSuccess = createAction(SEARCHING_SUCCESS);
export const onActionFailure = createAction(SEARCHING_FAILURE);

const searchEngines = {
  bing: bingSearch,
  google: googleSearch,
  both: multipleSearch,
};

/**
 * Performs a search based on the search engine and query string
 * @param {string} engine
 * @param {string} query
 */
const search = (engine, query) => async (dispatch) => {
  dispatch(onActionRequest());
  try {
    const elements = await searchEngines[engine](query);
    console.log('elements => ', elements);
    dispatch(onActionSuccess(elements));
  } catch (error) {
    console.error(error);
    dispatch(onActionFailure(error.message));
  }
};

export default search;
