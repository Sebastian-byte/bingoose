const API_KEY = process.env.REACT_APP_BING_API_KEY;
const SEARCH_URL = 'https://api.bing.microsoft.com/v7.0/search';

/**
 * Performs a search using bing api asynchronously
 * @param {string} query
 */
const search = async (query) => {
  const params = new URLSearchParams(query);
  params.append('q', query);
  let results = await fetch(`${SEARCH_URL}?${params}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': API_KEY,
    },
  });
  results = await results.json();
  return results;
};

export default search;
