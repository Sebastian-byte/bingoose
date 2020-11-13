import React from 'react';
import { Box, CheckBox } from 'grommet';
import { Moon, Sun } from 'grommet-icons';

const ThemeToggler = ({ darkMode, onToggle }) => (
  <Box pad="small" direction="row" alignSelf="end">
    {darkMode ? <Sun /> : <Moon />}
    <CheckBox checked={darkMode} onChange={() => onToggle(!darkMode)} toggle />
  </Box>
);

export default ThemeToggler;
