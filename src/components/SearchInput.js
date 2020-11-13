import React, { useState } from 'react';
import { Box, Button, Select, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import { useHistory } from 'react-router-dom';

const searchEngines = ['Google', 'Bing', 'Both'];

/**
 * Builds a custom search input component that listens on changes and key press
 * @param {object} param0
 */
const SearchInput = ({ placeholder, children, text, engine }) => {
  const [query, setQuery] = useState(text || '');
  const [searchEngine, setSearchEngine] = useState(engine || 'Google');
  const history = useHistory();

  const onChange = ({ target: { value } }) => setQuery(value);
  const onSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('q', query);
    params.append('e', searchEngine);
    history.push(`/search?${params}`);
  };
  const onEnter = (event) => {
    return event.code === 'Enter' ? onSubmit(event) : null;
  };

  return (
    <Box direction="column" data-test="search-input">
      <Box direction="row" gap="small">
        <Box
          background="search"
          direction="row"
          align="center"
          width="large"
          pad={{ horizontal: 'small', vertical: 'xsmall' }}
          round="small"
          border={{
            side: 'all',
            color: 'brand',
            size: 'small',
          }}
        >
          <Search color="brand" />
          <TextInput
            type="search"
            plain
            size="medium"
            value={query}
            onChange={onChange}
            onKeyPress={onEnter}
            placeholder={placeholder}
          />
          <Select
            size="medium"
            plain
            options={searchEngines}
            value={searchEngine}
            onChange={({ option }) => setSearchEngine(option)}
          />
        </Box>
      </Box>
      {children && (
        <Box pad="small" alignSelf="end" direction="row">
          {children}
          <Button
            primary
            size="large"
            style={{ borderRadius: 8 }}
            color="secondary"
            label="Search"
            onClick={onSubmit}
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchInput;
