const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SEARCH_URL = 'https://www.googleapis.com/customsearch/v1';
const ENGINE_ID = process.env.REACT_APP_GOOGLE_ENGINE_ID;

/**
 * Performs a search using google api asynchronously
 * @param {string} query
 */
const search = async (query) => {
  const params = new URLSearchParams(query);
  params.append('key', API_KEY);
  params.append('q', query);
  params.append('cx', ENGINE_ID);

  let results = await fetch(`${SEARCH_URL}?${params}`);
  results = await results.json();
  return results;
};

export default search;
