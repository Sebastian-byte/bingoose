import { bingSearch, googleSearch } from '.';

/**
 * Performs multiple search using google & bing asynchronously
 * @param {*} query
 */
const multipleSearch = async (query) => {
  try {
    const elements = await Promise.all([
      bingSearch(query),
      googleSearch(query),
    ]);
    return elements.flatMap((array) => array);
  } catch (err) {
    console.error(err);
    return await Promise.reject('Something went wrong');
  }
};

export default multipleSearch;
