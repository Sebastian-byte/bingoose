import React from 'react';
import { Box, List } from 'grommet';

const ResultsList = ({ items }) => {
  return (
    <Box pad="large">
      <List data={items} />
    </Box>
  );
};

export default ResultsList;
