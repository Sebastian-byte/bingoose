/**
 * Case sensitive function that validates if it's a valid search engine
 * @param {string} engine
 */
export const isValidEngine = (engine) =>
  engine === 'Google' || engine === 'Bing' || engine === 'Both';

/**
 * Parses the object from google api into a more readable stream
 * @param {object} param0
 */
export const parseGoogleData = ({ items }) =>
  items.map(({ snippet, title, link }) => ({
    heading: title,
    url: link,
    snippet,
  }));

/**
 * Parses the object from bing api into a more readable stream
 * @param {object} param0
 */
export const parseBingData = ({ webPages }) =>
  webPages?.value?.map(({ name, url, snippet }) => ({
    heading: name,
    url,
    snippet,
  }));
