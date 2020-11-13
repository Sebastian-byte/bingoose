import React, { useState } from 'react';
import { Box, Button, Select, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

const searchEngines = ['Google', 'Bing', 'Both'];

const SearchInput = ({ placeholder, children }) => {
  const [query, setQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('Google');

  const onChange = ({ target: { value } }) => setQuery(value);

  return (
    <Box direction="column">
      <Box direction="row" gap="small">
        <Box
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
      <Box pad="small" alignSelf="end" direction="row">
        {children}
        <Button
          primary
          size="large"
          style={{ borderRadius: 8 }}
          color="secondary"
          label="Search"
        />
      </Box>
    </Box>
  );
};

export default SearchInput;
