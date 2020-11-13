import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

export const StyledBox = styled(Box)`
  animation-iteration-count: infinite;
`;

const AnimatedBox = ({ ...rest }) => (
  <StyledBox
    data-test="animated-box"
    animation={{
      type: 'fadeOut',
      duration: 1900,
    }}
    background="light-4"
    round
    {...rest}
  />
);

export default AnimatedBox;
