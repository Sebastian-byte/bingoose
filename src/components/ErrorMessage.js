import { Box, Image, Text } from 'grommet';
import React from 'react';

const ErrorMessage = () => {
  return (
    <Box align="center" pad="small" data-test="error-message">
      <Image src="sad-logo.png" width="140" />
      <Text color="brand" margin="2rem" size="xlarge">
        Oops <b> Bingoose </b> couldn't find anything or some <b> API </b> error
        ocurred, try again?
      </Text>
    </Box>
  );
};

export default ErrorMessage;
