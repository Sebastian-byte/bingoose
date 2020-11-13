import React from 'react';
import { Anchor, Box, List, Text } from 'grommet';
import PlaceholderLoading from './PlaceholderLoading';
import { Link } from 'grommet-icons';

const placeholders = Array.from(Array(10), (_, i) => (
  <Box key={i} pad="small">
    <PlaceholderLoading />
  </Box>
));

const renderList = (items) => (
  <List data={items} data-test="list">
    {(datum) => (
      <Box>
        <Box width="xlarge">
          <Anchor href={datum.url} target="_blank" rel="noopener">
            <Text size="large" color="brand">
              {datum.heading}
            </Text>
          </Anchor>
          <Box width="large">
            <Anchor
              color="secondary"
              size="small"
              href={datum.url}
              target="_blank"
              label={<Text truncate>{datum.url}</Text>}
              icon={<Link size="15" />}
            />
          </Box>
          <Text> {datum.snippet} </Text>
        </Box>
      </Box>
    )}
  </List>
);

/**
 * Returns the rendered list of objects based on fixed parsed search results
 * @param {object} param0
 */
const ResultList = ({ items, loading }) => {
  return (
    <Box pad="large" data-test="result-list">
      {loading ? placeholders : renderList(items)}
    </Box>
  );
};

export default ResultList;
