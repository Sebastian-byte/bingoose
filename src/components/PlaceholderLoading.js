import React from 'react';
import { Box } from 'grommet';
import AnimatedBox from './AnimatedBox';

/** Minimal Placeholder loader simulation */
const PlaceholderLoading = () => {
  return (
    <Box gap="medium">
      <AnimatedBox height="12px" width="150px" />
      <AnimatedBox height="12px" width="100px" />
      <AnimatedBox height="12px" width="500px" />
    </Box>
  );
};

export default PlaceholderLoading;
